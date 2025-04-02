import {axiosInstance} from "./axios-client.ts";
import {ArticleApiResponse, ArticleAttributes, ArticlesApiResponse, ArticleUpdateAttributes} from "./DTO/articles.ts";

export async function getListArticles() {
  return axiosInstance.get<ArticlesApiResponse>('api/articles', {
    params: {
      fields: ['title', 'slug', 'createdAt', 'description', 'publishedAt'],
      populate: ['coverImage'],
      publicationState: 'preview',
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

export async function updateArticle(id: string, attributes: Partial<ArticleUpdateAttributes>) {
  return axiosInstance.put<ArticleApiResponse>(`api/articles/${id}`, {
    data: {
      ...attributes
    }
  }).then(response => response.data);
}

export async function unpublish(id: string) {
  return updateArticle(id, { publishedAt: null })
}

export async function publish(id: string) {
  return updateArticle(id, { publishedAt: new Date() })
}

export async function createArticle(attributes: Partial<ArticleAttributes>) {
  return axiosInstance.post<ArticleApiResponse>(`api/articles/`, {
    data: attributes
  }).then(response => response.data);
}
