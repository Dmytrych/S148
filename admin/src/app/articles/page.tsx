import {ArticleAttributes} from "@/api/DTO/articles";
import {fetchArticles} from "@/actions/fetchArticles";
import {locale} from "@/locale/ua";
import {Box, Container, Typography} from "@mui/material";
import {Metadata} from "next";
import ArticleList from "@/components/articles/ArticlesList";

export const revalidate = 60

export const metadata: Metadata = {
  title: locale.articles_page_title,
  openGraph: {
    title: locale.articles_page_title
  },
  robots: "follow,noindex",
}

async function Page() {
  const articles = await fetchArticles<ArticleAttributes>(['title', 'slug', 'createdAt', 'description'], ['coverImage'], { revalidate: 120 })

  return (<Container sx={{ pt: 3 }}>
    <Box display="flex" justifyContent="center" mb={2}>
      <Typography variant="h5">{locale.articles_page_title}</Typography>
    </Box>
    <ArticleList articles={articles} />
  </Container>)
}

export default Page;
