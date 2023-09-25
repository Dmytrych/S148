import useSWR from "swr";
import {ApiRoutes} from "@/api/apiRoutes";
import {productsFetcher} from "@/api/products";

export function useProducts() {
  return useSWR(ApiRoutes.Products, productsFetcher)
}
