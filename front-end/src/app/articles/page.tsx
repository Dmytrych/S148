import {ArticleAttributes} from "@/api/DTO/articles";
import {fetchArticles} from "@/actions/fetchArticles";
import AdaptiveCardGrid from "@/components/articles/AdaptiveCardGrid";
import ArticleCard from "@/components/articles/ArticleCard";
import Link from "next/link";
import {locale} from "@/locale/ua";
import {Routes} from "@/routes";
import {notFound} from "next/navigation";
import {Container} from "@mui/material";

async function Page() {

  const articles = await fetchArticles<ArticleAttributes>(['title', 'slug', 'createdAt', 'description'])

  if (!articles) {
    return notFound()
  }

  return (<Container sx={{ pt: 3 }}>
    <AdaptiveCardGrid items={articles} renderItem={(article) => (
      <ArticleCard
        titleUrl={`${Routes.Articles}/${article.attributes.slug}`}
        title={article.attributes.title}
        description={article.attributes.description}
        renderBottomButtons={() => (<Link href={`${Routes.Articles}/${article.attributes.slug}`}>{locale.view_article}</Link>)}
      />
    )}/>
  </Container>)
}

export default Page;