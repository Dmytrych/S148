'use server'

import {Box, Container, Typography} from "@mui/material";
import {fetchArticleBySlug} from "@/actions/fetchArticleBySlug";
import {fetchArticles} from "@/actions/fetchArticles";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import {ArticleAttributes} from "@/api/DTO/articles";
import {MDXRemote} from "next-mdx-remote/rsc";
import Image from "next/image";

type ArticleSlugProjection = {
  slug: string;
}

type ArticleMetadataProjection = {
  slug: string;
  title: string;
  canonicalUrl: string;
}

type PageParams = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await fetchArticles<ArticleSlugProjection>(["slug"]);

  if (!posts) {
    return;
  }

  return posts.map((post) => ({
    slug: post.attributes.slug,
  }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const article = await fetchArticleBySlug<ArticleMetadataProjection>(params.slug, ["slug", "title", "canonicalUrl"]);

  if (!article) {
    return notFound();
  }

  return {
    title: article.attributes.title,
    openGraph: {
      title: article.attributes.title,
    },
    alternates: {
      canonical: article.attributes.canonicalUrl
    }
  };
}

type ArticlePageProps = {
  params: {
    slug: string;
  }
}

const components = {
  Image
}


async function Page({ params }: ArticlePageProps) {
  if (!params?.slug) {
    return notFound()
  }

  const article = await fetchArticleBySlug<ArticleAttributes>(params.slug)

  if (!article) {
    return notFound()
  }

  return (<main>
    <Container>
      <article>
        <Typography variant="h5">{article.attributes.title}</Typography>
        <Box>
          <MDXRemote source={article.attributes.content} components={components}/>
        </Box>
      </article>
    </Container>
  </main>)
}

export default Page;