import useSWR from "swr";
import {ApiRoutes} from "@/api/apiRoutes";
import {ProductPopulateParams, productsFetcher} from "@/api/products";

export function useProducts() {
  return useSWR(ApiRoutes.Products, (url) => productsFetcher(url, { populate: [ProductPopulateParams.Images] }) )
}
