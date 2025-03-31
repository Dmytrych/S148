import {useMutation} from "@tanstack/react-query";
import {ArticleApiResponse} from "../api/DTO/articles.ts";
import {updateArticle} from "../api/articles.ts";

export function useUpdateArticleUploads() {
  return useMutation<ArticleApiResponse, Error, { id: number, uploads: number[] }>({
    mutationFn: async (params) => updateArticle(params.id.toString(), {
      relatedUploads: params.uploads
    }),
    onError: () => {
      alert("Error while saving article")
    }
  })
}
