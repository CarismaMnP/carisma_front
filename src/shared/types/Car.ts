export interface IEngine {
    id: string;
    name: string;
}

export interface IBody {
    id: string;
    name: string;
    engines: IEngine[];
}

export interface IModel {
    id: string;
    name: string;
    bodies: IBody[];
}

export interface IMake {
    id: string;
    name: string;
    models: IModel[];
}

export interface ICarData {
    makes: IMake[];
}

export interface ICarSearchParams {
    make?: string;
    model?: string;
    body?: string;
    engine?: string;
    oem?: string;
}
