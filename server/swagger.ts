import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const port = process.env.PORT || '8000';

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Amazu API',
            description: 'This is a simple CRUD API application made with Express and documented with Swagger',
            version: '0.1.0',
            servers: [`http://localhost:${port}`],
        },
    },
    // Path to your API routes
    apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
