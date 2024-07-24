import {ApiRoutes} from "@/api/apiRoutes";
import {ProductPopulateParams, fetchProducts} from "@/api/products";
import {useFetch} from "@/hooks/useFetch";

export function useProducts() {
  return useFetch(ApiRoutes.productsUrl(),
    async (url) => {
      const response = await fetchProducts(url, { populate: [ProductPopulateParams.Images, ProductPopulateParams.Characteristics] });
      return response.data;
    })
}
