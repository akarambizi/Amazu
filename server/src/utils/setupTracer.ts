import { trace } from '@opentelemetry/api';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { Resource } from '@opentelemetry/resources';
import { BasicTracerProvider, ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

// Define the service name for the tracer
export const SERVICE_NAME = 'amazu-service-tracer';

// Create and register an SDK
const provider = new BasicTracerProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: SERVICE_NAME,
    }),
});

// This will log all spans to the console
const consoleExporter = new ConsoleSpanExporter();
const consoleSpanProcessor = new SimpleSpanProcessor(consoleExporter);
provider.addSpanProcessor(consoleSpanProcessor);

// This will send all spans to a Zipkin service at the given URL
const zipkinExporter = new ZipkinExporter({
    url: 'http://localhost:9411/api/v2/spans', // This is the default URL for the Zipkin service.
    serviceName: SERVICE_NAME,
});

const zipkinSpanProcessor = new SimpleSpanProcessor(zipkinExporter);
provider.addSpanProcessor(zipkinSpanProcessor);

// This makes our provider the default for all tracing
trace.setGlobalTracerProvider(provider);

export default trace;
