import {useQuery} from "@tanstack/react-query";
import {getArticle} from "../../api/articles.ts";
import {CircularProgress, Container} from "@mui/material";
import {useParams} from "react-router";
import ArticleEditor from "../../components/articles/ArticleEditor.tsx";

export default function EditArticle() {
  const params = useParams();
  const { data: articleData, isPending } = useQuery({
    queryKey: ['article', params.slug],
    queryFn: async (params) => getArticle(params.queryKey[1] as string), })

  if ( isPending ) {
    return <CircularProgress />
  }

  const defaultTitle = articleData ? articleData.data.attributes.title : ''
  const defaultContent = articleData ? articleData.data.attributes.content : ''

  return (
    <Container sx={{ mt: 2 }}>
      <ArticleEditor title={defaultTitle} content={defaultContent} onSave={() => {}} />
    </Container>
  )
}
