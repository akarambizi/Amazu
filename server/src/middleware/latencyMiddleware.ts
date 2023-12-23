import { MeterProvider } from '@opentelemetry/metrics';
import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils';

// Create a new meter provider
const meter = new MeterProvider().getMeter('Amazu');

// Create a new metric
const requestLatency = meter.createValueRecorder('http_request_latency');

export const latencyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        const end = Date.now();
        const latency = end - start;

        // Record the latency
        requestLatency.record(latency);

        // Log the latency
        logger.info(`Request: ${req.method} ${req.originalUrl} Status: ${res.statusCode} took ${latency}ms`);
    });
    next();
};
