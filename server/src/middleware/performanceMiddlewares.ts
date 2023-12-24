import { MeterProvider } from '@opentelemetry/metrics';
import { NextFunction, Request, Response } from 'express';
import { createTracingSpan, logger } from '../utils';
import { Express } from 'express';

// Create a new meter provider
const meter = new MeterProvider().getMeter('amazu-service');

// Create a new metric
const requestLatency = meter.createValueRecorder('http_request_latency');

// Create a new counter metric for request count
const requestCount = meter.createCounter('http_request_count', {
    description: 'Count of total HTTP requests',
});

// Create a new counter metric for error count
const errorCount = meter.createCounter('http_error_count', {
    description: 'Count of HTTP requests that resulted in an error',
});

export const latencyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        const end = Date.now();
        const latency = end - start;

        // Record the latency
        requestLatency.record(latency);
        // Log the latency
        logger.info(`Request: ${req.method} ${req.originalUrl} Status: ${res.statusCode} took ${latency}ms`);

        // Create a new tracing span for the current HTTP request and response
        createTracingSpan(req, res);
    });
    next();
};

export const requestCountMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Increment the request count
    requestCount.bind({ method: req.method, path: req.path }).add(1);
    next();
};

export const errorCountMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (res.statusCode >= 400) {
        // Increment the error count
        errorCount.bind({ method: req.method, path: req.path, status_code: res.statusCode.toString() }).add(1);
    }
    next(err);
};

export const performanceMiddlewares = (app: Express) => {
    app.use(latencyMiddleware);
    app.use(requestCountMiddleware);
    app.use(errorCountMiddleware);
};
