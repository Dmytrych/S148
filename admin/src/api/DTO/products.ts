import {CmsModel, Metadata} from "@/api/DTO/common/common";
import {ApiImage} from "@/api/DTO/common/images";

export type ProductAttributes = {
    code: string;
    name: string;
    price: number;
    description?: string;
    shortDescription?: string;
    images?: {
        data: ApiImage[];
    };
    titleImage: {
      data: ApiImage;
    };
    characteristics?: Characteristic[];
    inStock: boolean;
    updatedAt: Date;
}

export type Characteristic = {
  name: string;
  value: string;
}

export type Product = CmsModel<ProductAttributes>

export type ProductsApiResponse = {
    data: Product[];
    meta: Metadata;
}

export type ProductApiResponse = {
  data: Product;
  meta: Metadata;
}

