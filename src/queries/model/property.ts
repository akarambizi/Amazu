export enum ListingType {
    Rent = 'Rent',
    Buy = 'Buy',
}

export enum PropertyType {
    Apartment = 'Apartment',
    House = 'House',
}

export enum PropertyStatus {
    Active = 'active',
    Inactive = 'inactive',
}

export interface Property {
    area: number;
    areaSafety: number;
    availableDate: string;
    bathRooms: number;
    bedRooms: number;
    description: string;
    images: string[];
    listingType: ListingType;
    location: {
        address: string;
        city: string;
        country: string;
        fullAdress: string;
        state: string;
        zip: number;
    };
    owner: {
        name: string;
        telephone: string;
    };
    parking: number;
    price: number;
    publishDate: string;
    rating: number;
    status: PropertyStatus;
    tags: string[];
    title: string;
    type: PropertyType;
    year: number;
}
