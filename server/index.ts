import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { propertyRoutes } from './src/routes';
import { connectDB } from './src/server';

const app = express();

// Connect to the database
connectDB().then(() => {
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

    app.get('/', (req, res) => {
        res.send('Hello, world!');
    });

    app.use(propertyRoutes);

    const port = process.env.PORT || '8000';

    app.listen(port, () => {
        console.log(`process ${process.env.PORT}`);
        console.log(`Server listening on port ${port}`);
    });
});
