'use server'

import { cache } from "react"
import "server-only"
import {fetchDataFromServer} from "@/helpers/api-helpers";
import {ProductsApiResponse} from "@/api/DTO/products";
import {ApiRoutes} from "@/api/apiRoutes";

export const fetchProducts = cache(async () => {
  'use server'

  try {
    const productApiResponse = await fetchDataFromServer<ProductsApiResponse>(ApiRoutes.productsUrl(), { method: "GET" })

    return productApiResponse.data
  } catch (err) {
    console.log(err);
    return undefined;
  }
})
