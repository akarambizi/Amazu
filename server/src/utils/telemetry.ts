import { SpanStatusCode } from '@opentelemetry/api';
import { RequestHandler, Request, Response } from 'express';
import trace, { SERVICE_NAME } from './setupTracer';

/**
 * Creates a new middleware function that includes tracing capabilities.
 *
 * Tracing is a technique used to monitor the execution of operations in a system. A "span" represents a single operation,
 *
 * @param middlewareFunction - The middleware function to wrap with a tracing span.
 * @returns A new middleware function that includes a tracing span.
 */
export const wrapWithTracingSpan = (middlewareFunction: RequestHandler, operationName?: string): RequestHandler => {
    const tracer = trace.getTracer(SERVICE_NAME, '0.1.0');
    const operation = operationName ?? middlewareFunction.name;

    return (req, res, next) => {
        tracer.startActiveSpan(operation, async (span) => {
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
        });
    };
};

/**
 * Get the span attributes from an HTTP request and response.
 *
 * @param {Request} req - The HTTP request.
 * @param {Response} res - The HTTP response.
 * @returns {Record<string, unknown>} The span attributes.
 */
const getSpanAttributes = (req: Request, res: Response) => {
    const attributes = {
        'http.url': req.protocol + '://' + req.get('host') + req.originalUrl,
        'http.method': req.method,
        'http.status_code': res.statusCode,
        'http.status_text': res.statusMessage,
        'http.route': req.baseUrl,
        'http.request_content_length': req.headers['content-length'] || 0,
        'http.response_content_length': res.getHeader('content-length') || 0,
        'http.user_agent': req.headers['user-agent'] || '',
        'http.flavor': req.httpVersion,
        'http.client_ip': req.ip || '',
        'http.params': JSON.stringify(req.params),
    };

    return attributes;
}

/**
 * Create a new tracing span for an HTTP request and response.
 *
 * @param {Request} req - The HTTP request.
 * @param {Response} res - The HTTP response.
 */
export const createTracingSpan = (req: Request, res: Response) => {
    const tracer = trace.getTracer(SERVICE_NAME, '0.1.0');
    const operationName = `${req.baseUrl}`;
    const span = tracer.startSpan(operationName);

    const attributes = getSpanAttributes(req, res);

    for (const [key, value] of Object.entries(attributes)) {
        span.setAttribute(key, value);
    }

    span.end();
};
