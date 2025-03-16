import ArticleList from "../../components/articles/ArticlesList.tsx";
import {useMutation, useQuery} from "@tanstack/react-query";
import {createArticle, getListArticles} from "../../api/articles.ts";
import {Box, Button, CircularProgress, Container, Modal, Paper, Stack} from "@mui/material";
import {useState} from "react";
import CreateArticleForm, {ArticleCreateValues} from "../../components/articles/CreateArticleForm.tsx";
import {ArticleApiResponse, ArticleCreateAttributes} from "../../api/DTO/articles.ts";
import {useNavigate} from "react-router";

export default function Articles() {
  const navigate = useNavigate();
  const [creationModalOpen, setCreationModalOpen] = useState(false);
  const { data: articles, isPending } = useQuery({ queryKey: ['articles'], queryFn: getListArticles })

  const createMutation = useMutation<ArticleApiResponse, Error, { attributes: ArticleCreateAttributes }>({
    mutationFn: async (params) => createArticle(params.attributes),
    onError: () => {
      alert("Error while saving article")
    }
  })

  const handleCreateNew = async (values: ArticleCreateValues) => {
    const responseModel = await createMutation.mutateAsync({ attributes: {
        ...values,
        description: '',
        content: 'Example content',
        keywords: ''
      }})

    if (!responseModel) {
      return
    }

    navigate(`/articles/edit/${responseModel.data.id}`)
  }

  const handleOpenCreationModalClick = () => {
    setCreationModalOpen(() => true);
  }

  if (!articles || isPending) {
    return <Box>
      <CircularProgress />
    </Box>
  }

  return (
    <Container sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <Stack direction="row" overflow="scroll" minHeight={10}>
        <Button onClick={handleOpenCreationModalClick}>Create new</Button>
      </Stack>
      <Paper elevation={3} sx={{ padding: 5, display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap', minHeight: "100vh" }}>
        <ArticleList articles={articles.data}/>
      </Paper>
      <Modal open={creationModalOpen} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper sx={{ width: 500, p: 5 }}>
          <CreateArticleForm onSubmit={handleCreateNew} defaultValues={{ title: "New Article", slug: '' }} />
        </Paper>
      </Modal>
    </Container>
  )
}
