'use client'

import ArticleCard from "@/components/articles/ArticleCard";
import {ARTICLES_PAGE} from "@/constants/routes";
import {CmsModel} from "@/api/DTO/common/common";
import {ArticleAttributes} from "@/api/DTO/articles";
import {getImageUrl} from "@/helpers/image-url";
import {getOptimizedImageUrl} from "@/helpers/product/get-optimized-image-url";

type ArticleListProps = {
  articles: CmsModel<ArticleAttributes>[] | undefined;
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <>
      { articles ? articles.map((article, index) => (
        <ArticleCard
          key={index}
          imageSrc={article.attributes.coverImage ? getImageUrl(getOptimizedImageUrl(article.attributes.coverImage?.data, 'small')) : undefined}
          altText={article.attributes.coverImage?.data?.attributes?.alternativeText}
          titleUrl={`${ARTICLES_PAGE}/${article.attributes.slug}`}
          title={article.attributes.title}
          description={article.attributes.description}
        />
      )) : null}
    </>
  )
}

export default ArticleList
