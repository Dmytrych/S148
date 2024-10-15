'use server'

import {cache} from "react";
import {fetchFromServer} from "@/helpers/api-helpers";
import {ApiRoutes} from "@/api/apiRoutes";
import {ArticleAttributes, ArticleProjection, PartialArticleApiResponse} from "@/api/DTO/articles";

export const fetchArticleBySlug = cache(async <TArticle extends Partial<ArticleAttributes>>(slug: string, projection?: ArticleProjection, nextOptions?: any) => {
  try {
    const productApiResponse = await fetchFromServer<PartialArticleApiResponse<TArticle>>({
      url: ApiRoutes.articleUrl(slug),
      method: "GET",
      queryParams: {
        fields: projection as string[]
      },
      otherOptions: nextOptions
    })

    return productApiResponse?.data?.data
  } catch (err) {
    console.log(err);
    return undefined;
  }
})
