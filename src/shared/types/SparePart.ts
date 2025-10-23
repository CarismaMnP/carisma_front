import { ICarData } from "./Car";
import { IImage } from "./Image";

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
    images: IImage[];
    priceDollars: string | number;
    priceCents: string | number;
}