import {CmsModel, Metadata} from "@/api/DTO/common/common";

export type ArticleAttributes = {
  id: number,
  slug: string,
  title: string,
  description: string,
  author?: string,
  canonicalUrl?: string,
  content: string;
  createdAt: Date,
  updatedAt: Date
}

export type Article = CmsModel<ArticleAttributes> & {
}

export type ArticleProjection = (keyof ArticleAttributes)[]

export type ArticleApiResponse = {
  data: Article;
  meta: Metadata;
}

export type ArticlesApiResponse = {
  data: Article[];
  meta: Metadata;
}

export type PartialArticleApiResponse<TArticle extends Partial<ArticleAttributes>> = {
  data: CmsModel<TArticle>;
  meta: Metadata;
}

export type PartialArticlesApiResponse<TArticle extends Partial<ArticleAttributes>> = {
  data: CmsModel<TArticle>[];
  meta: Metadata;
}