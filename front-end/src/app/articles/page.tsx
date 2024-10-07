import {ArticleAttributes} from "@/api/DTO/articles";
import {fetchArticles} from "@/actions/fetchArticles";
import AdaptiveCardGrid from "@/components/articles/AdaptiveCardGrid";
import ArticleCard from "@/components/articles/ArticleCard";
import {locale} from "@/locale/ua";
import {Routes} from "@/routes";
import {notFound} from "next/navigation";
import {Box, Container, Divider, Typography} from "@mui/material";
import {getOptimizedImageUrl} from "@/helpers/product/get-optimized-image-url";
import {getImageUrl} from "@/helpers/image-url";

async function Page() {

  const articles = await fetchArticles<ArticleAttributes>(['title', 'slug', 'createdAt', 'description'], ['coverImage'])

  if (!articles) {
    return notFound()
  }

  return (<Container sx={{ pt: 3 }}>
    <Box display="flex" justifyContent="center" mb={2}>
      <Typography variant="h5_squares">{locale.articles_page}</Typography>
    </Box>
    <AdaptiveCardGrid items={articles} renderItem={(article) => (
      <ArticleCard
        imageSrc={getImageUrl(getOptimizedImageUrl(article.attributes.coverImage.data, 'small')) ?? ""}
        altText={article.attributes.coverImage.data.attributes.alternativeText}
        titleUrl={`${Routes.Articles}/${article.attributes.slug}`}
        title={article.attributes.title}
        description={article.attributes.description}
      />
    )}/>
  </Container>)
}

export default Page;