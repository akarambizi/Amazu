import express from 'express';
import { propertiesController } from '../controllers';

export const propertiesRoutes = express.Router();

/**
 * @swagger
 * /properties:
 *   get:
 *     tags: ['Properties']
 *     summary: Retrieve a list of properties
 *     responses:
 *       200:
 *         description: A list of properties.
 */
propertiesRoutes.get('/', propertiesController.getAllProperties);

/**
 * @swagger
 * /properties:
 *   post:
 *     tags: ['Properties']
 *     summary: Create a new property
 *     responses:
 *       201:
 *         description: The created property.
 */
propertiesRoutes.post('/', propertiesController.createProperty);

/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     tags: ['Properties']
 *     summary: Retrieve a property by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Property ID
 *     responses:
 *       200:
 *         description: The requested property.
 */
propertiesRoutes.get('/:id', propertiesController.getProperty);

/**
 * @swagger
 * /properties/{id}:
 *   patch:
 *     tags: ['Properties']
 *     summary: Update a property by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Property ID
 *     responses:
 *       200:
 *         description: The updated property.
 */
propertiesRoutes.patch('/:id', propertiesController.updateProperty);

/**
 * @swagger
 * /properties/{id}:
 *   delete:
 *     tags: ['Properties']
 *     summary: Delete a property by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Property ID
 *     responses:
 *       200:
 *         description: The deleted property.
 */
propertiesRoutes.delete('/:id', propertiesController.deleteProperty);
