import express from 'express';
import { propertiesController } from '../controllers';
import { wrapWithTracingSpan } from '../utils';

export const propertiesRoutes = express.Router();

propertiesRoutes.get('/', wrapWithTracingSpan(propertiesController.getAllProperties));
propertiesRoutes.post('/', wrapWithTracingSpan(propertiesController.createProperty));
propertiesRoutes.get('/:id', wrapWithTracingSpan(propertiesController.getProperty));
propertiesRoutes.patch('/:id', wrapWithTracingSpan(propertiesController.updateProperty));
propertiesRoutes.delete('/:id', wrapWithTracingSpan(propertiesController.deleteProperty));
