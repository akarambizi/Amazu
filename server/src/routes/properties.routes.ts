import express from 'express';
import { propertiesController } from '../controllers';
import { validateBody } from '../middleware';
import { createPropertySchema, updatePropertySchema } from '../validation/properties.schema';

export const propertiesRoutes = express.Router();

propertiesRoutes.get('/', propertiesController.getAllProperties);
propertiesRoutes.post('/', validateBody(createPropertySchema), propertiesController.createProperty);
propertiesRoutes.get('/:id', propertiesController.getProperty);
propertiesRoutes.patch('/:id', validateBody(updatePropertySchema), propertiesController.updateProperty);
propertiesRoutes.delete('/:id', propertiesController.deleteProperty);
