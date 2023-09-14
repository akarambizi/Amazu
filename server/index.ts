import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const port = process.env.PORT || '8000';

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
