import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getArticle, updateArticle} from "../../api/articles.ts";
import {CircularProgress, Container} from "@mui/material";
import {Navigate, useParams} from "react-router";
import ArticleEditor, {ArticleEditValues} from "../../components/articles/ArticleEditor.tsx";
import {ArticleApiResponse, ArticleUpdateAttributes} from "../../api/DTO/articles.ts";
import {useLogin} from "../../hooks/use-login.ts";

export default function EditArticle() {
  const {user} = useLogin()
  const queryClient = useQueryClient()

  const params = useParams();
  const { data: articleData, isPending } = useQuery({
    queryKey: ['article', params.slug],
    queryFn: async (params) => getArticle(params.queryKey[1] as string), })

  const updateMutation = useMutation<ArticleApiResponse, Error, { id: number, attributes: ArticleUpdateAttributes }>({
    mutationFn: async (params) => updateArticle(params.id.toString(), params.attributes),
    onError: () => {
      alert("Error while saving article")
    }
  })

  if (!user.id) {
    return <Navigate to='/login'/>
  }

  if ( isPending ) {
    return <CircularProgress />
  }

  const handleSave = async (values: ArticleEditValues) => {
    if (!articleData) {
      // TODO: Create article
      return
    }
    await updateMutation.mutateAsync({ id: articleData.data.id, attributes: values })
    await queryClient.invalidateQueries({ queryKey: ['article'] })
  }

  const attributes = articleData?.data?.attributes
  const values = attributes ? {
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    author: attributes.author ?? '',
    canonicalUrl: attributes.canonicalUrl,
    content: attributes.content,
    keywords: attributes.keywords,
  } : null

  return (
    <Container sx={{ mt: 2 }}>
      { values ? (
        <ArticleEditor values={values} onSave={handleSave} />
      ) : null }
    </Container>
  )
}
