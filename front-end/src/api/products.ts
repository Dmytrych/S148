import {IProductsApiResponse} from "@/api/DTO/products";
import {fetchDataFromClient} from "@/helpers/api-helpers";

export enum ProductPopulateParams {
    Images = "images",
    Characteristics = "characteristics"
}

export interface ProductQueryParams {
    populate: ProductPopulateParams[]
}

export async function fetchProducts(url: string, params: ProductQueryParams): Promise<IProductsApiResponse> {
  return fetchDataFromClient(url, { params, method: "GET" });
}