import { MeterProvider } from '@opentelemetry/metrics';
import { Request, Response, NextFunction } from 'express';

// Create a new meter provider
const meter = new MeterProvider().getMeter('my-app');

// Create a new metric
const requestLatency = meter.createValueRecorder('http_request_latency');

export const latencyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        const end = Date.now();
        const latency = end - start;

        // Record the latency
        requestLatency.record(latency);
    });
    next();
};