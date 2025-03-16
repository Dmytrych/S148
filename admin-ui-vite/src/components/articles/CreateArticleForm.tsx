import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Button, TextField} from "@mui/material";

export type ArticleCreateValues = {
  title: string,
  slug: string,
}

type CreateArticleProps = {
  onSubmit: (values: ArticleCreateValues) => void | Promise<void>;
  defaultValues?: ArticleCreateValues;
}

export default function CreateArticleForm({ onSubmit, defaultValues }: CreateArticleProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleCreateValues>({ defaultValues });

  const processSubmit: SubmitHandler<ArticleCreateValues> = onSubmit

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(processSubmit)}
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
      <TextField
        label="Slug"
        type="text"
        {...register('slug', { required: 'Slug is required' })}
        error={!!errors.slug}
        helperText={errors.slug?.message}
      />
      <Button type="submit" variant="contained">
        Create
      </Button>
    </Box>
  )
}
