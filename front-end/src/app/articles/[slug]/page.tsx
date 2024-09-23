import {Box, Container} from "@mui/material";
import {locale} from "@/locale/ua";
import {fetchArticleBySlug} from "@/actions/fetchArticleBySlug";

type ArticlePageProps = {
  params: {
    slug: string;
  }
}

async function Page({ params }: ArticlePageProps) {
  if (!params?.slug) {
    return {
      title: locale.not_found_product_page_title
    }
  }

  const article = await fetchArticleBySlug(params.slug)

  if (!article) {
    return {
      title: locale.not_found_product_page_title
    }
  }

  return (<Container>
    <Box>
      {article.attributes.title}
    </Box>
  </Container>)
}

export default Page;