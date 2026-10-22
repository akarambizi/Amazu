import { trace } from '@opentelemetry/api';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { ConsoleSpanExporter, SimpleSpanProcessor, TracerProvider } from '@opentelemetry/sdk-trace';
import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
import { logger } from './logger';
import { getZipkinUrl } from '../utils/environment';

// Define the service name for the tracer
export const SERVICE_NAME = 'amazu-service-tracer';

// This will log all spans to the console
const consoleSpanProcessor = new SimpleSpanProcessor({ exporter: new ConsoleSpanExporter() });

// This will send all spans to a Zipkin service at the given URL
const zipkinExporter = new ZipkinExporter({
    url: getZipkinUrl('/api/v2/spans'), // This is the default URL for the Zipkin service.
    serviceName: SERVICE_NAME,
});
const zipkinSpanProcessor = new SimpleSpanProcessor({ exporter: zipkinExporter });

// Create and register an SDK
const provider = new TracerProvider({
    resource: resourceFromAttributes({
        [ATTR_SERVICE_NAME]: SERVICE_NAME,
    }),
    spanProcessors: [consoleSpanProcessor, zipkinSpanProcessor],
});

logger.info('Zipkin is live on port http://localhost:9411');

// This makes our provider the default for all tracing
trace.setGlobalTracerProvider(provider);

export default trace;
