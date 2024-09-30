'use server'

import {cache} from "react";
import {fetchDataFromServer} from "@/helpers/api-helpers";
import {ApiRoutes} from "@/api/apiRoutes";
import {ArticleAttributes, ArticleProjection, PartialArticleApiResponse} from "@/api/DTO/articles";

export const fetchArticleBySlug = cache(async <TArticle extends Partial<ArticleAttributes>>(slug: string, projection?: ArticleProjection) => {
  try {
    const productApiResponse = await fetchDataFromServer<PartialArticleApiResponse<TArticle>>(
      ApiRoutes.articleUrl(slug),
      {
        method: "GET",
        params: {
          fields: projection
        }
      })

    return productApiResponse.data
  } catch (err) {
    console.log(err);
    return undefined;
  }
})
