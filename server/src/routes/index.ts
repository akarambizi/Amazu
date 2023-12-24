import { Router } from 'express';
import { propertiesRoutes } from './properties.routes';
import { withSpan } from '../utils/telemetry';
import { logger } from '../utils';

const routes = Router();

routes.get(
    '/',
    withSpan((req, res) => {
        res.send('Amazu Homepage!');
    }, 'getHomepage')
);

routes.use('/properties', propertiesRoutes);

export default routes;
