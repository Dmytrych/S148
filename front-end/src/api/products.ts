import {IProductsApiResponse} from "@/api/DTO/products";
import {fetchData} from "@/helpers/api-helpers";

export enum ProductPopulateParams {
    Images = "images",
    Characteristics = "characteristics"
}

export interface ProductQueryParams {
    populate: ProductPopulateParams[]
}

export async function fetchProducts(url: string, params: ProductQueryParams): Promise<IProductsApiResponse> {
  return fetchData(url, { params, method: "GET" });
}