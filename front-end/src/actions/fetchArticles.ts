'use server'

import {fetchFromServer} from "@/helpers/api-helpers";
import {ApiRoutes} from "@/api/apiRoutes";
import {
  ArticleAttributes,
  ArticleProjection,
  PartialArticlesApiResponse
} from "@/api/DTO/articles";

export const fetchArticles = async <TArticle extends Partial<ArticleAttributes>>(projection?: ArticleProjection, populate?: ArticleProjection, nextOptions?: any) => {
  try {
    const productApiResponse = await fetchFromServer<PartialArticlesApiResponse<TArticle>>({
      url: ApiRoutes.articlesUrl(),
      method: "GET",
      queryParams: {
        fields: projection as string[],
        populate: populate as string[]
      },
      otherOptions: nextOptions
    })

    return productApiResponse?.data?.data
  } catch (err) {
    console.log(err);
    return undefined;
  }
}