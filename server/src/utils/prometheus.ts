import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { Resource } from '@opentelemetry/resources';
import { MeterProvider } from '@opentelemetry/sdk-metrics';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { logger } from './logger';

// Add your port and startServer to the Prometheus options
const options = { port: 9464, startServer: true };

export const prometheusExporter = new PrometheusExporter(options, () => {
    logger.info('Prometheus exporter is live on port 9464.');
});
