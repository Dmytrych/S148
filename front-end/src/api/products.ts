import {ProductsApiResponse} from "@/api/DTO/products";
import {fetchDataFromClient} from "@/helpers/api-helpers";

export enum ProductPopulateParams {
    TitleImage = "titleImage",
    Images = "images",
    Characteristics = "characteristics"
}

export interface ProductQueryParams {
    populate: ProductPopulateParams[]
}

export async function fetchProducts(url: string, params: ProductQueryParams): Promise<ProductsApiResponse> {
  return fetchDataFromClient(url, { params, method: "GET" });
}