import express from 'express';
import { propertiesController } from '../controllers';
import { withSpan } from '../utils/telemetry';

export const propertiesRoutes = express.Router();

propertiesRoutes.get('/', withSpan(propertiesController.getAllProperties));
propertiesRoutes.post('/', withSpan(propertiesController.createProperty));
propertiesRoutes.get('/:id', withSpan(propertiesController.getProperty));
propertiesRoutes.patch('/:id', withSpan(propertiesController.updateProperty));
propertiesRoutes.delete('/:id', withSpan(propertiesController.deleteProperty));
