import {ArticleAttributes} from "@/api/DTO/articles";
import {fetchArticles} from "@/actions/fetchArticles";
import AdaptiveCardGrid from "@/components/articles/AdaptiveCardGrid";
import ArticleCard from "@/components/articles/ArticleCard";
import {locale} from "@/locale/ua";
import {Routes} from "@/routes";
import {Box, Container, Typography} from "@mui/material";
import {getOptimizedImageUrl} from "@/helpers/product/get-optimized-image-url";
import {getImageUrl} from "@/helpers/image-url";

export const revalidate = 60

async function Page() {
  const articles = await fetchArticles<ArticleAttributes>(['title', 'slug', 'createdAt', 'description'], ['coverImage'])

  return (<Container sx={{ pt: 3 }}>
    <Box display="flex" justifyContent="center" mb={2}>
      <Typography variant="h5_squares">{locale.articles_page}</Typography>
    </Box>
    { articles ? <AdaptiveCardGrid items={articles} renderItem={(article) => (
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