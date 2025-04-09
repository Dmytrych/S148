'use client'

import {Box} from "@mui/material";
import ArticleImage from "@/components/articles/ArticleImage";
import {ErrorBoundary} from "react-error-boundary";
import {MDXRemote} from "next-mdx-remote/rsc";

type ArticleContentProps = {
  content: string;
}

const components = {
  ArticleImage
}

const MdxArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <Box>
      <ErrorBoundary fallbackRender={(props) => {
        return <div>{JSON.stringify(props.error)}</div>
      }}>
        <MDXRemote source={content} components={components}/>
      </ErrorBoundary>
    </Box>
  )
}

export default MdxArticleContent
