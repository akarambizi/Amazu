import { Resource } from '@opentelemetry/resources';
import { MeterProvider } from '@opentelemetry/sdk-metrics';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { prometheusExporter } from './prometheus';

export const SERVICE_NAME_PROMETHEUS = 'amazu-service-prometheus';

// Create a new meter for the service;
const meterProvider = new MeterProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: SERVICE_NAME_PROMETHEUS,
    }),
});

meterProvider.addMetricReader(prometheusExporter);
const meter = meterProvider.getMeter('amazu-service-prometheus');

// Create a new metric
export const requestLatency = meter.createCounter('duration_milliseconds_sum', {
    description: 'HTTP request latencies',
    unit: 'ms',
});

// Create a new counter metric for request count
export const requestCount = meter.createCounter('duration_milliseconds_count', {
    description: 'Count of total HTTP requests',
    unit: '1',
});

// Create a new counter metric for error count
export const errorCount = meter.createCounter('http_error_count', {
    description: 'Count of HTTP requests that resulted in an error',
});
