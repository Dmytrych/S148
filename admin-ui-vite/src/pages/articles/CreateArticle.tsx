import {useMutation} from "@tanstack/react-query";
import {createArticle} from "../../api/articles.ts";
import {Container, Paper} from "@mui/material";
import {Navigate, useNavigate} from "react-router";
import ArticleEditor, {ArticleEditValues} from "../../components/articles/ArticleEditor.tsx";
import {ArticleApiResponse, ArticleUpdateAttributes} from "../../api/DTO/articles.ts";
import {useLogin} from "../../hooks/use-login.ts";
import BackNavigation from "../../components/BackNavigation.tsx";

const DEFAULT_FORM_VALUES = {
  slug: '',
  title: 'Title',
  description: 'Description',
  author: '',
  canonicalUrl: '',
  content: '',
  keywords: '',
}

export default function CreateArticle() {
  const navigate = useNavigate();
  const {user} = useLogin()

  const updateMutation = useMutation<ArticleApiResponse, Error, { attributes: ArticleUpdateAttributes }>({
    mutationFn: async (params) => createArticle(params.attributes),
    onError: () => {
      alert("Error while saving article")
    }
  })

  if (!user.id) {
    return <Navigate to='/login'/>
  }

  const handleSave = async (values: ArticleEditValues) => {
    const responseModel = await updateMutation.mutateAsync({ attributes: values })
    if (!responseModel) {
      return
    }

    navigate(`/articles/edit/${responseModel.data.id}`)
  }

  return (
    <Container>
      <BackNavigation fallbackTo='/articles'/>
      <Paper elevation={3} sx={{ p: 5 }}>
        <ArticleEditor values={DEFAULT_FORM_VALUES} onSave={handleSave} />
      </Paper>
    </Container>
  )
}
