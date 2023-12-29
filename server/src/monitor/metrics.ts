import { Resource } from '@opentelemetry/resources';
import { MeterProvider } from '@opentelemetry/sdk-metrics';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { prometheusExporter } from './prometheus';

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
export const requestLatency = meter.createHistogram('http_request_latency', {
    description: 'HTTP request latencies',
});
// Create a new counter metric for request count
export const requestCount = meter.createCounter('http_request_count', {
    description: 'Count of total HTTP requests',
});

// Create a new counter metric for error count
export const errorCount = meter.createCounter('http_error_count', {
    description: 'Count of HTTP requests that resulted in an error',
});