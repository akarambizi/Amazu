import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { connectDB } from './src/database/dbConnect';
import { latencyMiddleware } from './src/middleware';
import routes from './src/routes';
import { logger, setupTracer } from './src/utils';
import { swaggerDocs, swaggerUi } from './swagger';

// Set up OpenTelemetry
setupTracer();

const app = express();

// Connect to the database
connectDB().then(() => {
    // Use the cors middleware to enable Cross Origin Resource Sharing
    // This allows client applications from different domains to interact with the API.
    app.use(cors());

    // Use the latencyMiddleware to measure the time taken to process each request.
    app.use(latencyMiddleware);

    // Use the morgan middleware for logging HTTP requests in the 'dev' format.
    // This helps in debugging by logging information about every incoming request.
    app.use(morgan('dev'));

    // Use the express.json middleware to parse incoming requests with JSON payloads. ex: { "key": "value" }.
    app.use(express.json());

    // Use the express.urlencoded middleware to parse incoming requests with URL-encoded payloads. ex:key=value&key2=value2.
    app.use(express.urlencoded({ extended: true }));

    // Set up Swagger UI at the /api-docs route. The explorer option is enabled, allowing users to interact with the API documentation.
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));

    app.get('/', (req, res) => {
        res.send('Amazu!');
    });

    app.use(routes);

    // 404 handler
    app.use((req, res) => {
        logger.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
        res.status(404).send({ error: 'Not Found', message: 'The requested resource could not be found' });
    });

    const port = process.env.PORT || '8000';

    app.listen(port, () => {
        logger.info(`Server listening on port ${port}`);
    });
});
