import { NodeTracerProvider } from '@opentelemetry/node';
import { SimpleSpanProcessor } from '@opentelemetry/tracing';
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector-proto';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

export const setupTracer = () => {
  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: 'Amazu',
    }),
  });

  provider.addSpanProcessor(
    new SimpleSpanProcessor(
      new CollectorTraceExporter({
        url: 'http://localhost:14250',
      }),
    ),
  );

  provider.register();
};