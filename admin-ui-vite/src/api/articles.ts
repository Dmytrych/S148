import {axiosInstance} from "./axios-client.ts";
import {ArticlesApiResponse} from "./DTO/articles.ts";

export async function getListArticles() {
  return axiosInstance.get<ArticlesApiResponse>('api/articles', {
    params: {
      fields: ['title', 'slug', 'createdAt', 'description'],
      populate: ['coverImage']
    }
  }).then(response => response.data);
}
