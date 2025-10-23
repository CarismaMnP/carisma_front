import { ICarData } from "./Car";

export interface ISparePart {
    id: string;
    name: string;
    category: string;
    oemNumber: string;
    alternativeName: string;
    replaces: string[];
    description: string;
    tags: string[];
    car: ICarData;
    image: string;
    priceDollars: string | number;
    priceCents: string | number;
}