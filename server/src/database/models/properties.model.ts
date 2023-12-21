import mongoose from 'mongoose';
import { IProperty, ListingType, PropertyStatus, PropertyType } from '../../types/properties.types';

const PropertySchema = new mongoose.Schema<IProperty>({
    area: { type: Number, required: true },
    areaSafety: { type: Number, required: true },
    availableDate: { type: String, required: true },
    bathRooms: { type: Number, required: true },
    bedRooms: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    listingType: { type: String, enum: Object.values(ListingType), required: true },
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        fullAdress: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: Number, required: true },
    },
    owner: {
        name: { type: String, required: true },
        telephone: { type: String, required: true },
    },
    parking: { type: Number, required: true },
    price: { type: Number, required: true },
    publishDate: { type: String, required: true },
    rating: { type: Number, required: true },
    status: { type: String, enum: Object.values(PropertyStatus), required: true },
    tags: { type: [String], required: true },
    title: { type: String, required: true },
    type: { type: String, enum: Object.values(PropertyType), required: true },
    year: { type: Number, required: true },
});

export const Property = mongoose.model('Property', PropertySchema);
