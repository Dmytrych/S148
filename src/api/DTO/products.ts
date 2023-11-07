import {CrmModel, Metadata} from "@/api/DTO/common/common";
import {ApiImage} from "@/api/DTO/common/images";

export interface IProductAttributes {
    code: string;
    name: string;
    price: number;
    description?: string;
    shortDescription?: string;
    images?: {
        data: ApiImage[]
    };
}

export interface IProduct extends CrmModel<IProductAttributes> {}

export interface IProductApiResponse {
    data: IProduct[];
    meta: Metadata;
}