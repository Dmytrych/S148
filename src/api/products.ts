import {API} from "@/api/axiosFetcher";
import {IProductApiResponse} from "@/api/DTO/products";

export enum ProductPopulateParams {
    Images = "images",
    Characteristics = "characteristics"
}

export interface ProductQueryParams {
    populate: ProductPopulateParams[]
}

export async function productsFetcher(url: string, params: ProductQueryParams): Promise<IProductApiResponse> {
  console.log(params);
  const response = await API.get<IProductApiResponse>(url, { params });

  if (response.status < 200 || response.status >= 300) {
    throw new Error("Could not fetch products");
  }

  return response.data;
}