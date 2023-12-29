import express from 'express';
import { propertiesController } from '../controllers';

export const propertiesRoutes = express.Router();

propertiesRoutes.get('/', propertiesController.getAllProperties);
propertiesRoutes.post('/', propertiesController.createProperty);
propertiesRoutes.get('/:id', propertiesController.getProperty);
propertiesRoutes.patch('/:id', propertiesController.updateProperty);
propertiesRoutes.delete('/:id', propertiesController.deleteProperty);
