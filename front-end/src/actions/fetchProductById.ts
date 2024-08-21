'use server'

import { cache } from "react"
import "server-only"
import {fetchDataFromServer} from "@/helpers/api-helpers";
import {ProductApiResponse} from "@/api/DTO/products";
import {ApiRoutes} from "@/api/apiRoutes";
import {ProductPopulateParams} from "@/api/products";

export const fetchProductById = cache(async (id: string) => {
  'use server'

  try {
    const productApiResponse = await fetchDataFromServer<ProductApiResponse>(
      ApiRoutes.productUrl(id),
      {
        method: "GET",
        params: {
          populate: [ProductPopulateParams.Images, ProductPopulateParams.Characteristics]
        }
      })

    return productApiResponse.data
  } catch (err) {
    console.log(err);
    return undefined;
  }
})
