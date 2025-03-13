import ArticleList from "../../components/articles/ArticlesList.tsx";
import {useQuery} from "@tanstack/react-query";
import {getListArticles} from "../../api/articles.ts";
import {Box, Button, CircularProgress, Container, Paper, Stack} from "@mui/material";
import {Link} from "react-router";

export default function Articles() {
  const { data: articles, isPending } = useQuery({ queryKey: ['articles'], queryFn: getListArticles })

  if (!articles || isPending) {
    return <Box>
      <CircularProgress />
    </Box>
  }

  return (
    <Box minHeight="100vh">
      <Container sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Stack direction="row" overflow="scroll" minHeight={10}>
          <Button component={Link} to="/articles/new">Create new</Button>
        </Stack>
        <Paper elevation={3} sx={{ padding: 5, display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
          <ArticleList articles={articles.data}/>
        </Paper>
      </Container>
    </Box>
  )
}
