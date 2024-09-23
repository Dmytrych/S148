'use server'

import {cache} from "react";
import {fetchDataFromServer} from "@/helpers/api-helpers";
import {ApiRoutes} from "@/api/apiRoutes";
import {ProductPopulateParams} from "@/api/products";
import {ArticleApiResponse} from "@/api/DTO/articles";

export const fetchArticleBySlug = cache(async (slug: string) => {
  'use server'

  try {
    const productApiResponse = await fetchDataFromServer<ArticleApiResponse>(
      ApiRoutes.productUrl(slug),
      {
        method: "GET"
      })

    return productApiResponse.data
  } catch (err) {
    console.log(err);
    return undefined;
  }
})
