import { Request, Response } from 'express';
import { Property } from '../models';
import { logger } from '../monitor';

export const getAllProperties = async (req: Request, res: Response) => {
    try {
        const properties = await Property.find({});
        logger.info('All properties retrieved successfully');
        res.send(properties);
    } catch (error) {
        logger.error('Error retrieving all properties:', error);
        res.status(500).send();
    }
};

export const createProperty = async (req: Request, res: Response) => {
    try {
        const property = new Property(req.body);
        await property.save();
        logger.info(`Property created successfully: ${property._id}`);
        res.status(201).send(property);
    } catch (error) {
        logger.error('Error creating property:', error);
        res.status(500).send();
    }
};

export const getProperty = async (req: Request, res: Response) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            logger.warn(`Property not found: ${req.params.id}`);
            res.status(404).send();
        }
        logger.info(`Property retrieved successfully: ${req.params.id}`);
        res.send(property);
    } catch (error) {
        logger.error(`Error retrieving property: ${req.params.id}`, error);
        res.status(500).send();
    }
};

export const updateProperty = async (req: Request, res: Response) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = Object.keys(Property.schema.paths);
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        logger.warn(`Invalid updates attempted for property: ${req.params.id}`, req.body);
        res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!property) {
            logger.warn(`Property not found: ${req.params.id}`);
            res.status(404).send();
        }

        logger.info(`Property updated successfully: ${req.params.id}`);
        res.send(property);
    } catch (error) {
        logger.error(`Error updating property: ${req.params.id}`, error);
        res.status(500).send();
    }
};

export const deleteProperty = async (req: Request, res: Response) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);

        if (!property) {
            logger.warn(`Property not found: ${req.params.id}`);
            res.status(404).send();
        }

        logger.info(`Property deleted successfully: ${req.params.id}`);
        res.send(property);
    } catch (error) {
        logger.error(`Error deleting property: ${req.params.id}`, error);
        res.status(500).send();
    }
};
