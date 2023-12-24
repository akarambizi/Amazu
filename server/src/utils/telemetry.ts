import { SpanStatusCode } from '@opentelemetry/api';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import trace, { SERVICE_NAME } from './setupTracer';

/**
 * Creates a new middleware function that includes tracing capabilities.
 *
 * Tracing is a technique used to monitor the execution of operations in a system. A "span" represents a single operation,
 *
 * @param operation - The name of the operation for the tracing span.
 * @param middlewareFunction - The middleware function to wrap with a tracing span.
 * @returns A new middleware function that includes a tracing span.
 */
export const withSpan = (operation: string, middlewareFunction: RequestHandler): RequestHandler => {
    return async (req, res, next) => {
        const tracer = trace.getTracer(SERVICE_NAME, '0.1.0');
        const span = tracer.startSpan(operation);

        try {
            await middlewareFunction(req, res, next);
            span.setStatus({ code: SpanStatusCode.OK });
        } catch (error) {
            span.setStatus({
                code: SpanStatusCode.ERROR,
                message: error instanceof Error ? error.message : 'An unknown error occurred',
            });
            throw error;
        } finally {
            span.end();
        }
    };
};
