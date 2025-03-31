import {createContext} from "react";
import {CmsModel} from "../api/DTO/common/common.ts";
import {ArticleAttributes} from "../api/DTO/articles.ts";

export type ArticleEditorContextType = {
  article: CmsModel<ArticleAttributes>
  setArticle: (article: CmsModel<ArticleAttributes>) => void
}

export const ArticleEditorContext = createContext<ArticleEditorContextType>({
  article: {} as CmsModel<ArticleAttributes>,
  setArticle: () => {}
})
