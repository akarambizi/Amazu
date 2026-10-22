import { z } from 'zod';
import { ListingType, PropertyStatus, PropertyType } from '../types/properties.types';

const locationSchema = z.object({
    address: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
    fullAdress: z.string().min(1),
    state: z.string().min(1),
    zip: z.number(),
});

const ownerSchema = z.object({
    name: z.string().min(1),
    telephone: z.string().min(1),
});

// Mirrors the required fields in `models/properties.model.ts` / `types/properties.types.ts`.
// Request bodies are validated with this schema *before* reaching Mongoose, so malformed
// input is rejected with a 400 instead of relying solely on Mongoose schema validation.
export const createPropertySchema = z.object({
    area: z.number(),
    areaSafety: z.number(),
    availableDate: z.string().min(1),
    bathRooms: z.number(),
    bedRooms: z.number(),
    description: z.string().min(1),
    images: z.array(z.string()).min(1),
    listingType: z.nativeEnum(ListingType),
    location: locationSchema,
    owner: ownerSchema,
    parking: z.number(),
    price: z.number(),
    publishDate: z.string().min(1),
    rating: z.number(),
    status: z.nativeEnum(PropertyStatus),
    tags: z.array(z.string()),
    title: z.string().min(1),
    type: z.nativeEnum(PropertyType),
    year: z.number(),
});

// PATCH requests may send a partial update; the controller separately checks that only
// known fields are present.
export const updatePropertySchema = createPropertySchema.partial();
