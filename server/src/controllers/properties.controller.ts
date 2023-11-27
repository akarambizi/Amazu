import { Request, Response } from 'express';
import { Property } from '../models';

export const getAllProperties = async (req: Request, res: Response) => {
    const properties = await Property.find({});
    res.send(properties);
};

export const createProperty = async (req: Request, res: Response) => {
    const property = new Property(req.body);
    await property.save();
    res.status(201).send(property);
};

export const getProperty = async (req: Request, res: Response) => {
    const property = await Property.findById(req.params.id);
    if (!property) {
        return res.status(404).send();
    }
    res.send(property);
};

export const updateProperty = async (req: Request, res: Response) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = Object.keys(Property.schema.paths);
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!property) {
        return res.status(404).send();
    }

    res.send(property);
};

export const deleteProperty = async (req: Request, res: Response) => {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
        return res.status(404).send();
    }

    res.send(property);
};
