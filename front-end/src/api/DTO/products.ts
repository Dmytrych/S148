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
    inStock: boolean;
}

export interface Characteristic {
  name: string;
  value: string;
}

export interface Product extends CmsModel<IProductAttributes> {
}

export interface IProductsApiResponse {
    data: Product[];
    meta: Metadata;
}

export type ProductApiResponse = {
  data: Product;
  meta: Metadata;
}

