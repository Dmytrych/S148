import {CmsModel} from "../../api/DTO/common/common.ts";
import {ArticleAttributes} from "../../api/DTO/articles.ts";
import ArticleCard from "./ArticleCard.tsx";
import {getArticleEditRoute} from "../../utils/routes.ts";
import {getImageUrl} from "../../utils/image-url.ts";
import {getOptimizedImageUrl} from "../../utils/get-optimized-image-url.ts";

type ArticleListProps = {
  articles: CmsModel<ArticleAttributes>[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    articles.map((article, index) => (
      <ArticleCard
        key={index}
        imageSrc={article.attributes.coverImage ? getImageUrl(getOptimizedImageUrl(article.attributes.coverImage?.data, 'small')) : undefined}
        altText={article.attributes.coverImage?.data?.attributes?.alternativeText}
        titleUrl={getArticleEditRoute(article.id.toString())}
        title={article.attributes.title}
        description={article.attributes.description}
      />
    ))
  )
}

export default ArticleList
