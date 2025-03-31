import {ReactNode, useEffect, useState} from "react";
import {CmsModel} from "../../api/DTO/common/common.ts";
import {ArticleAttributes} from "../../api/DTO/articles.ts";
import {ArticleEditorContext} from "../../context/article-editor-context.tsx";

type ArticleEditorContextProps = {
  article?: CmsModel<ArticleAttributes>
  children: ReactNode;
}

export function ArticleEditorContextProvider({ children, article: articleParam }: ArticleEditorContextProps) {
  const [article, setArticle] = useState<CmsModel<ArticleAttributes>>({} as CmsModel<ArticleAttributes>);

  useEffect(() => {
    if (articleParam) {
      setArticle(articleParam)
    }
  }, [articleParam]);

  return (
    <ArticleEditorContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleEditorContext.Provider>
  )
}
