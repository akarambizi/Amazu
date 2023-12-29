import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';
import { metricsMiddlewares } from './middleware';
import { logger } from './monitor';
import routes from './routes';

const app = express();

// Apply metrics monitoring middlewares
metricsMiddlewares(app);

// Use the cors middleware to enable Cross Origin Resource Sharing
// This allows client applications from different domains to interact with the API.
app.use(cors());

// Use the morgan middleware for logging HTTP requests in the 'dev' format.
// This helps in debugging by logging information about every incoming request.
app.use(morgan('dev'));

// Use the express.json middleware to parse incoming requests with JSON payloads. ex: { "key": "value" }.
app.use(express.json());

// Use the express.urlencoded middleware to parse incoming requests with URL-encoded payloads. ex:key=value&key2=value2.
app.use(express.urlencoded({ extended: true }));

// Set up Swagger UI at the /api-docs route. The explorer option is enabled, allowing users to interact with the API documentation.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));

// Set up the routes
app.use(routes);

// 404 handler
app.use((req, res) => {
    logger.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
    res.status(404).send({ error: 'Not Found', message: 'The requested resource could not be found' });
});

export default app;
