import ArticleList from "../../components/articles/ArticlesList.tsx";
import {useQuery} from "@tanstack/react-query";
import {getListArticles} from "../../api/articles.ts";
import {Box, CircularProgress, Container} from "@mui/material";

export default function Articles() {
  const { data: articles, isPending } = useQuery({ queryKey: ['articles'], queryFn: getListArticles })

  if (!articles || isPending) {
    return <Box>
      <CircularProgress />
    </Box>
  }

  return (
    <Container sx={{ mt: 2 }}>
      <ArticleList articles={articles.data}/>
    </Container>
  )
}
