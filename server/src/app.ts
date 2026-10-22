import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';
import { metricsMiddlewares } from './middleware';
import { logger } from './monitor';
import routes from './routes';

const app = express();

// Apply metrics monitoring middlewares
metricsMiddlewares(app);

// Use helmet to set a set of standard, secure HTTP response headers
// (e.g. X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security).
app.use(helmet());

// Restrict CORS to a known set of origins in production. CORS_ORIGINS is a comma-separated
// list (see .env.example); if unset, all origins are allowed, which is only acceptable for
// local development.
const corsOrigins = process.env.CORS_ORIGINS?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
app.use(cors(corsOrigins && corsOrigins.length > 0 ? { origin: corsOrigins } : undefined));

// Rate-limit all API traffic to blunt brute-force / abuse attempts. Values are
// configurable via env vars so they can be tuned per environment without a code change.
const limiter = rateLimit({
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    limit: Number(process.env.RATE_LIMIT_MAX) || 100,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

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
