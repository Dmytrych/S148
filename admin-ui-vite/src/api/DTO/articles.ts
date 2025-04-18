import {ApiImage} from "./common/images.ts";
import {CmsModel, Metadata} from "./common/common.ts";

export type ArticleAttributes = {
  slug: string,
  title: string,
  description: string,
  author?: string,
  canonicalUrl?: string,
  content: string;
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date | null,
  coverImage?: {
    data: ApiImage;
  },
  relatedUploads?: {
    data: ApiImage[];
  }
  keywords: string
}

export type ArticleUpdateAttributes = {
  slug: string,
  title: string,
  description: string,
  author?: string,
  canonicalUrl?: string,
  publishedAt?: Date | null,
  content: string;
  coverImage?: number,
  relatedUploads?: number[]
  keywords: string
}

export type ArticleCreateAttributes = {
  slug: string,
  title: string,
  description: string,
  author?: string,
  canonicalUrl?: string,
  content: string;
  keywords: string
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
