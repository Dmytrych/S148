import {ArticleAttributes} from "@/api/DTO/articles";
import {fetchArticles} from "@/actions/fetchArticles";
import AdaptiveCardGrid from "@/components/articles/AdaptiveCardGrid";
import ArticleCard from "@/components/articles/ArticleCard";
import {locale} from "@/locale/ua";
import {Routes} from "@/routes";
import {Box, Container, Typography} from "@mui/material";
import {getOptimizedImageUrl} from "@/helpers/product/get-optimized-image-url";
import {getImageUrl} from "@/helpers/image-url";
import {Metadata} from "next";
import {CmsModel} from "@/api/DTO/common/common";

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
      <Typography variant="h5_squares">{locale.articles_page}</Typography>
    </Box>
    { articles ? <AdaptiveCardGrid<CmsModel<ArticleAttributes>> items={articles} renderItem={(article) => (
      <ArticleCard
        imageSrc={getImageUrl(getOptimizedImageUrl(article.attributes.coverImage.data, 'small')) ?? ""}
        altText={article.attributes.coverImage.data.attributes.alternativeText}
        titleUrl={`${Routes.Articles}/${article.attributes.slug}`}
        title={article.attributes.title}
        description={article.attributes.description}
      />
    )}/> : null}
  </Container>)
}

export default Page;