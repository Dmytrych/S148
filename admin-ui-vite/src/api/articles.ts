import {axiosInstance} from "./axios-client.ts";
import {ArticleApiResponse, ArticlesApiResponse} from "./DTO/articles.ts";

export async function getListArticles() {
  return axiosInstance.get<ArticlesApiResponse>('api/articles', {
    params: {
      fields: ['title', 'slug', 'createdAt', 'description'],
      populate: ['coverImage']
    }
  }).then(response => response.data);
}

export async function getArticle(slug: string) {
  return axiosInstance.get<ArticleApiResponse>(`api/article/slug/${slug}`, {
    params: {
      populate: ['coverImage', 'images', 'characteristics'],
    }
  }).then(response => response.data);
}
