'use server'

import {MDXRemote} from "next-mdx-remote/rsc";
import {Box} from "@mui/material";
import ArticleImage from "@/components/articles/ArticleImage";
import {ErrorBoundary} from "react-error-boundary";
import {locale} from "@/locale/ua";

type ArticleContentProps = {
  content: string;
}

const components = {
  ArticleImage
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <Box>
      <ErrorBoundary fallback={<div>{locale.unexpected_error_occurred}</div>}>
        <MDXRemote source={content} components={components}/>
      </ErrorBoundary>
    </Box>
  )
}

export default ArticleContent