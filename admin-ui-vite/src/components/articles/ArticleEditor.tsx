import {Box, Button, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import ArticleRteFormField from "./ArticleRteFormField.tsx";
import {ApiImage} from "../../api/DTO/common/images.ts";
import CoverImagePicker from "./CoverImagePicker.tsx";

type ArticleEditorProps = {
  articleImages: ApiImage[];
  values: ArticleEditValues
  onSave: (values: ArticleEditValues) => void;
}

export type ArticleEditValues = {
  title: string;
  content: string;
  slug: string;
  keywords: string;
  description: string;
  author: string;
  coverImageId?: number;
}

export default function ArticleEditor({ values, onSave, articleImages }: ArticleEditorProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleEditValues>({ defaultValues: { ...values } });

  const onSubmit: SubmitHandler<ArticleEditValues> = async (data) => {
    onSave(data);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: '0' }}
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
      <TextField
        label="Keywords"
        type="text"
        {...register('keywords', { required: 'Keywords are required' })}
        error={!!errors.keywords}
        helperText={errors.keywords?.message}
      />
      <TextField
        label="Description"
        type="text"
        {...register('description', { required: 'Description is required' })}
        error={!!errors.description}
        helperText={errors.description?.message}
      />
      <TextField
        label="Author"
        type="text"
        {...register('author', { required: 'Author is required' })}
        error={!!errors.author}
        helperText={errors.author?.message}
      />
      <Controller
        name="coverImageId"
        control={control}
        render={({ field }) => (
          <CoverImagePicker defaultSelectionId={field.value} images={articleImages} onSelect={(image) => field.onChange(image.id)}/>
        )}
      />
      <Controller
        control={control}
        render={({ field }) => (
          <ArticleRteFormField value={field.value} onChange={field.onChange} availableImages={articleImages}/>
        )}
        name="content"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </Box>
  )
}
