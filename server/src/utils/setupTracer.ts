import { NodeTracerProvider } from '@opentelemetry/node';
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/tracing';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';

export const setupTracer = () => {
    // Create a tracer provider that will be responsible for creating traces and spans.
    const provider = new NodeTracerProvider();

    // Create a console exporter that will print the span data to the console.
    const consoleExporter = new ConsoleSpanExporter();

    // Create a span processor that will send span data to the console exporter as soon as each span ends.
    const consoleProcessor = new SimpleSpanProcessor(consoleExporter);

    // Add the console processor to the tracer provider.
    provider.addSpanProcessor(consoleProcessor);

    // Create a Zipkin exporter that will send the span data to a Zipkin service.
    // The Zipkin service is located at 'http://localhost:9411/api/v2/spans'.

    const zipkinExporter = new ZipkinExporter({
        url: 'http://localhost:9411/api/v2/spans',
        serviceName: 'Amazu-service',
    });

    // Create a span processor that will send span data to the Zipkin exporter as soon as each span ends.
    const zipkinProcessor = new SimpleSpanProcessor(zipkinExporter);
    provider.addSpanProcessor(zipkinProcessor);

    // Add the Zipkin processor to the tracer provider.
    provider.addSpanProcessor(zipkinProcessor);

    // Register the tracer provider.
    provider.register();
};
