import express from 'express';
import { propertiesController } from '../controllers';
import { withSpan } from '../utils/telemetry';

export const propertiesRoutes = express.Router();

propertiesRoutes.get('/', withSpan('getAllProperties', propertiesController.getAllProperties));
propertiesRoutes.post('/', withSpan('createProperty', propertiesController.createProperty));
propertiesRoutes.get('/:id', withSpan('getProperty', propertiesController.getProperty));
propertiesRoutes.patch('/:id', withSpan('updateProperty', propertiesController.updateProperty));
propertiesRoutes.delete('/:id', withSpan('deleteProperty', propertiesController.deleteProperty));
