import { Router } from 'express';
import { propertiesRoutes } from './properties.routes';
import { wrapWithTracingSpan } from '../utils';

const routes = Router();

routes.get(
    '/',
    wrapWithTracingSpan((req, res) => {
        res.send('Amazu Homepage!');
    }, 'getHomepage')
);

routes.use('/properties', propertiesRoutes);

export default routes;
