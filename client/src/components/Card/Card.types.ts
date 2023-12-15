export interface ICardData {
    area: number;
    bathRooms: number;
    bedRooms: number;
    images: string[];
    location: { fullAdress: string };
    price: number;
    title: string;
}
export interface ICardProps {
    data: ICardData;
}
