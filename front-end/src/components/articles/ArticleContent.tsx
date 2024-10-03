'use server'

import {MDXRemote} from "next-mdx-remote/rsc";
import {Box} from "@mui/material";
import ArticleImage from "@/components/articles/ArticleImage";

type ArticleContentProps = {
  content: string;
}

const components = {
  ArticleImage
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <Box>
      <MDXRemote source={content} components={components}/>
    </Box>
  )
}

export default ArticleContent