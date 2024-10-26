import {Box, Container, Typography} from "@mui/material";
import {fetchArticleBySlug} from "@/actions/fetchArticleBySlug";
import {fetchArticles} from "@/actions/fetchArticles";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import {ArticleAttributes} from "@/api/DTO/articles";
import ArticleContent from "@/components/articles/ArticleContent";

type ArticleMetadataProjection = {
  slug: string;
  title: string;
  canonicalUrl: string;
  description: string;
  keywords: string;
}

type PageParams = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await fetchArticles<ArticleAttributes>();

  if (!posts) {
    return [];
  }

  return posts.map((post) => ({
    slug: post.attributes.slug,
  }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const article = await fetchArticleBySlug<ArticleMetadataProjection>(params.slug, ["slug", "title", "canonicalUrl", "description", "keywords"]);

  if (!article) {
    return notFound();
  }

  return {
    title: article.attributes.title,
    description: article.attributes.description,
    keywords: article.attributes.keywords,
    robots: "index,follow",
    openGraph: {
      title: article.attributes.title,
      description: article.attributes.description,
    },
    alternates: {
      canonical: article.attributes.canonicalUrl ?? `https://${process.env.NEXT_PUBLIC_HOST_NAME}/articles/${article.attributes.slug}`,
    }
  };
}

type ArticlePageProps = {
  params: {
    slug: string;
  }
}

export const revalidate = 60

async function Page({ params }: ArticlePageProps) {
  if (!params?.slug) {
    return notFound()
  }

  const article = await fetchArticleBySlug<ArticleAttributes>(params.slug, undefined, { revalidate: 180 })

  if (!article) {
    return notFound()
  }

  return (<main>
    <Container>
      <article>
        <Typography variant="h5">{article.attributes.title}</Typography>
        <Box>
          <ArticleContent content={article.attributes.content}/>
        </Box>
      </article>
    </Container>
  </main>)
}

export default Page;