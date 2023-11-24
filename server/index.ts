import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import { propertyRoutes } from './src/routes';
import { connectDB } from './src/server';

const app = express();

// Connect to the database
connectDB().then(() => {
    app.use(propertyRoutes);

    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        res.send('Hello, world!');
    });

    const port = process.env.PORT || '8000';

    app.listen(port, () => {
        console.log(`process ${process.env.PORT}`);
        console.log(`Server listening on port ${port}`);
    });
});
