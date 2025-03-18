import {axiosInstance} from "./axios-client.ts";
import {ArticleApiResponse, ArticleAttributes, ArticlesApiResponse} from "./DTO/articles.ts";

export async function getListArticles() {
  return axiosInstance.get<ArticlesApiResponse>('api/articles', {
    params: {
      fields: ['title', 'slug', 'createdAt', 'description'],
      populate: ['coverImage']
    }
  }).then(response => response.data);
}

export async function getArticle(id: string) {
  return axiosInstance.get<ArticleApiResponse>(`api/articles/${id}`, {
    params: {
      populate: ['coverImage', 'images', 'characteristics', 'relatedUploads'],
    }
  }).then(response => response.data);
}

export async function updateArticle(id: string, attributes: Partial<ArticleAttributes>) {
  return axiosInstance.put<ArticleApiResponse>(`api/articles/${id}`, {
    data: attributes
  }).then(response => response.data);
}

export async function createArticle(attributes: Partial<ArticleAttributes>) {
  return axiosInstance.post<ArticleApiResponse>(`api/articles/`, {
    data: attributes
  }).then(response => response.data);
}
