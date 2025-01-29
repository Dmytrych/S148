import {locale} from "@/locale/ua";
import {Box, Container, Typography} from "@mui/material";
import {Metadata} from "next";
import {fetchArticleBySlug} from "@/actions/fetchArticleBySlug";
import {ArticleAttributes} from "@/api/DTO/articles";
import {notFound} from "next/navigation";
import ArticleTextEditor from "@/components/articles/ArticleTextEditor";

export const revalidate = 60

export const metadata: Metadata = {
  title: locale.articles_page_title,
  openGraph: {
    title: locale.articles_page_title
  },
  robots: "follow,noindex",
}

type PageProps = {
  params: {
    slug: string
  }
}

async function Page({ params }: PageProps) {
  const article = await fetchArticleBySlug<ArticleAttributes>(params.slug, undefined, { revalidate: 180 })

  if (!article) {
    return notFound()
  }

  return (<Container sx={{ pt: 3 }}>
    <Box display="flex" justifyContent="center" mb={2}>
      <Typography variant="h5">{locale.articles_page_title}</Typography>
    </Box>
    <ArticleTextEditor/>
  </Container>)
}

export default Page;
