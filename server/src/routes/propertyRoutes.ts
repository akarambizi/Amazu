import express from 'express';
import { propertyController } from '../controllers';

export const propertyRoutes = express.Router();

propertyRoutes.get('/properties', propertyController.getAllProperties);
propertyRoutes.post('/property', propertyController.createProperty);
propertyRoutes.get('/property/:id', propertyController.getProperty);
propertyRoutes.patch('/property/:id', propertyController.updateProperty);
propertyRoutes.delete('/property/:id', propertyController.deleteProperty);
