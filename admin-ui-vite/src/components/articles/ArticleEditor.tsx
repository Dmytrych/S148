import {Box, Button, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import ArticleRteFormField from "./ArticleRteFormField.tsx";

type ArticleEditorProps = {
  title: string;
  content: string;
  onSave: () => void;
}

type ArticleValues = {
  title: string;
  content: string;
}

export default function ArticleEditor({ title = '', content = '' }: ArticleEditorProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleValues>({ defaultValues: { title, content } });

  const onSubmit: SubmitHandler<ArticleValues> = async (data) => {
    console.log(data)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: '0 auto' }}
    >
      <TextField
        label="Title"
        type="text"
        {...register('title', { required: 'Title is required' })}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <Controller
        control={control}
        render={({ field }) => (
          <ArticleRteFormField value={field.value} onChange={field.onChange}/>
        )}
        name="content"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </Box>
  )
}
