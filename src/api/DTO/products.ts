import {Metadata} from "@/api/DTO/common";

export interface IProductAttributes {
    code: string;
    name: string;
    price: number;
    description?: string;
    shortDescription?: string;
}

export interface IProduct {
    id: number;
    attributes: IProductAttributes;
}

export interface IProductApiResponse {
    data: IProduct[];
    meta: Metadata;
}