import { Resource } from '@opentelemetry/resources';
import { MeterProvider } from '@opentelemetry/sdk-metrics';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { Express, NextFunction, Request, Response } from 'express';
import { createTracingSpan, logger, prometheusExporter } from '../utils';

const SERVICE_NAME = 'amazu-service-prometheus';

// Create a new meter for the service;
const meterProvider = new MeterProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: SERVICE_NAME,
    }),
});

meterProvider.addMetricReader(prometheusExporter);
const meter = meterProvider.getMeter('amazu-service-prometheus');

// Create a new metric
const requestLatency = meter.createHistogram('http_request_latency', {
    description: 'HTTP request latencies',
});
// Create a new counter metric for request count
const requestCount = meter.createCounter('http_request_count', {
    description: 'Count of total HTTP requests',
});

// Create a new counter metric for error count
const errorCount = meter.createCounter('http_error_count', {
    description: 'Count of HTTP requests that resulted in an error',
});

const getLabels = (req: Request, res: Response) => {
    return {
        method: req.method,
        path: req.originalUrl,
        status_code: res.statusCode.toString(),
    };
};

export const latencyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        const end = Date.now();
        const latency = end - start;
        const labels = getLabels(req, res);

        // Record the latency
        requestLatency.record(latency, labels);
        // Log the latency
        logger.info(`Request: ${req.method} ${req.originalUrl} Status: ${res.statusCode} took ${latency}ms`);

        // Create a new tracing span for the current HTTP request and response
        createTracingSpan(req, res);
    });
    next();
};

export const requestCountMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const labels = getLabels(req, res);

    // Increment the request count
    requestCount.add(1, labels);
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

export const performanceMiddlewares = (app: Express) => {
    app.use(latencyMiddleware);
    app.use(requestCountMiddleware);
    app.use(errorCountMiddleware);
};
