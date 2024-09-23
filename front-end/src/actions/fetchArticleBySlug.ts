'use server'

import {cache} from "react";
import {fetchDataFromServer} from "@/helpers/api-helpers";
import {ApiRoutes} from "@/api/apiRoutes";
import {ArticleApiResponse} from "@/api/DTO/articles";

export const fetchArticleBySlug = cache(async (slug: string) => {
  try {
    const productApiResponse = await fetchDataFromServer<ArticleApiResponse>(
      ApiRoutes.articleUrl(slug),
      {
        method: "GET"
      })

    return productApiResponse.data
  } catch (err) {
    console.log(err);
    return undefined;
  }
})
