'use server'

import {cache} from "react";
import {fetchDataFromServer} from "@/helpers/api-helpers";
import {ApiRoutes} from "@/api/apiRoutes";
import {
  ArticleAttributes,
  ArticleProjection,
  PartialArticlesApiResponse
} from "@/api/DTO/articles";

export const fetchArticles = cache(async <TArticle extends Partial<ArticleAttributes>>(projection?: ArticleProjection) => {
  try {
    const productApiResponse = await fetchDataFromServer<PartialArticlesApiResponse<TArticle>>(ApiRoutes.articlesUrl(), {
      method: "GET",
      params: {
        fields: projection
      }})

    return productApiResponse.data
  } catch (err) {
    console.log(err);
    return undefined;
  }
})