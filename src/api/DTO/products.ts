import {CmsModel, Metadata} from "@/api/DTO/common/common";
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
    characteristics?: Characteristic[];
}

export interface Characteristic {
  name: string;
  value: string;
}

export interface IProduct extends CmsModel<IProductAttributes> {
}

export interface IProductApiResponse {
    data: IProduct[];
    meta: Metadata;
}