export interface ICardProps {
    data: {
        area: number;
        bathRooms: number;
        bedRooms: number;
        images: string[];
        location: { fullAdress: string };
        price: number;
        title: string;
    };
}
