import { Express, NextFunction, Request, Response } from 'express';
import { SERVICE_NAME_PROMETHEUS, createTracingSpan, errorCount, logger, requestCount, requestLatency } from '../monitor';

const getLabels = (req: Request, res: Response) => {
    return {
        method: req.method,
        path: req.originalUrl,
        http_status_code: res.statusCode,
        service_name: SERVICE_NAME_PROMETHEUS,
        http_route: req.baseUrl || req.route.path,
        span_kind: 'SPAN_KIND_SERVER',
    };
};

export const latencyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        const end = Date.now();
        const latency = end - start;
        const labels = getLabels(req, res);

        // Record the latency
        requestLatency.add(latency, labels);
        requestCount.add(1, labels);
        // Log the latency
        logger.info(`Request: ${req.method} ${req.originalUrl} Status: ${res.statusCode} took ${latency}ms`);

        // Create a new tracing span for the current HTTP request and response
        createTracingSpan(req, res);
    });
    next();
};

export const errorCountMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (res.statusCode >= 400) {
        // Increment the error count
        const labels = getLabels(req, res);

        errorCount.add(1, labels);
    }
    next(err);
};

export const metricsMiddlewares = (app: Express) => {
    app.use(latencyMiddleware);
    app.use(errorCountMiddleware);
};
