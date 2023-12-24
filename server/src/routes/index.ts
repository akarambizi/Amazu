import { Router } from 'express';
import { propertiesRoutes } from './properties.routes';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Amazu Homepage!');
});

routes.use('/properties', propertiesRoutes);

export default routes;
