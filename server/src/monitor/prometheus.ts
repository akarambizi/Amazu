import { ExporterConfig, PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { logger } from './logger';

// Add your port and startServer to the Prometheus options
const options: ExporterConfig = { port: 9464 };

export const prometheusExporter = new PrometheusExporter(options, () => {
    logger.info(`Prometheus is live on http://localhost:${options.port}/metrics`);
});
