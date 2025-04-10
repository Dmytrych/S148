import {Box, Container, Grid2, Typography} from "@mui/material";
import {fetchArticleBySlug} from "@/actions/fetchArticleBySlug";
import {fetchArticles} from "@/actions/fetchArticles";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import {ArticleAttributes} from "@/api/DTO/articles";
import ArticleContent from "@/components/articles/ArticleContent";
import LogoBanner from "@/components/ui/logo/LogoBanner";
import TopBuyBanner from "@/components/ui/banners/TopBuyBanner";

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
    <TopBuyBanner/>
    <Container>
      <article>
        <Grid2 container>
          <Grid2 size={{xs: 12, md: 8}}>
            <Typography mt={4} variant="h4">{article.attributes.title}</Typography>
            <Box borderTop='2px solid' mt={2}>
              <ArticleContent content={article.attributes.content}/>
            </Box>
          </Grid2>
        </Grid2>
      </article>
    </Container>
  </main>)
}

export default Page;
