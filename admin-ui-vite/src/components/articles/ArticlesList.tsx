import {CmsModel} from "../../api/DTO/common/common.ts";
import {ArticleApiResponse, ArticleAttributes} from "../../api/DTO/articles.ts";
import ArticleCard from "./ArticleCard.tsx";
import {getArticleEditRoute} from "../../utils/routes.ts";
import {getImageUrl} from "../../utils/image-url.ts";
import {getOptimizedImageUrl} from "../../utils/get-optimized-image-url.ts";
import {Button} from "@mui/material";
import {publish, unpublish} from "../../api/articles.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

type ArticleListProps = {
  articles: CmsModel<ArticleAttributes>[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  const queryClient = useQueryClient()
  const publishMutation = useMutation<ArticleApiResponse, Error, string>({
    mutationFn: async (params) => publish(params),
    onError: () => {
      alert("Error while publishing article")
    }
  })

  const unpublishMutation = useMutation<ArticleApiResponse, Error, string>({
    mutationFn: async (params) => unpublish(params),
    onError: () => {
      alert("Error while unpublishing article")
    }
  })

  const handlePublish = async (id: string) => {
    await publishMutation.mutateAsync(id)
    await queryClient.invalidateQueries({ queryKey: ['articles'] })
  }

  const handleUnpublish = async (id: string) => {
    await unpublishMutation.mutateAsync(id)
    await queryClient.invalidateQueries({ queryKey: ['articles'] })
  }

  return (
    articles.map((article, index) => (
      <ArticleCard
        key={index}
        imageSrc={article.attributes.coverImage ? getImageUrl(getOptimizedImageUrl(article.attributes.coverImage?.data, 'small')) : undefined}
        altText={article.attributes.coverImage?.data?.attributes?.alternativeText}
        titleUrl={getArticleEditRoute(article.id.toString())}
        title={article.attributes.title}
        description={article.attributes.description}
        renderBottomButtons={() => (
          <Button onClick={article.attributes.publishedAt ?
            () => handleUnpublish(article.id.toString()) :
            () => handlePublish(article.id.toString())
          }>{ article.attributes.publishedAt ? 'Unpublish' : 'Publish'}</Button>
        )}
      />
    ))
  )
}

export default ArticleList
