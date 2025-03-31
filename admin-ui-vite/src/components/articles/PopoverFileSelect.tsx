import PopoverButton, {RenderButtonProps, RenderContentProps} from "../ui/PopoverButton.tsx";
import {ApiImage} from "../../api/DTO/common/images.ts";
import {ReactNode, useContext, useState} from "react";
import ArticleFileList from "./ArticleFileList.tsx";
import {Button, Stack} from "@mui/material";
import FileInput from "../ui/FileInput.tsx";
import useUploads from "../../hooks/use-uploads.ts";
import {useUpdateArticleUploads} from "../../hooks/use-update-article-uploads.ts";
import {ArticleEditorContext} from "../../context/article-editor-context.tsx";
import {useQueryClient} from "@tanstack/react-query";

type PopoverFileSelect = {
  images: ApiImage[];
  renderButton: (props: RenderButtonProps) => ReactNode;
  onSelect: (file: ApiImage) => void
}

export default function PopoverFileSelect({ onSelect, renderButton, images }: PopoverFileSelect) {
  const queryClient = useQueryClient()
  const { article } = useContext(ArticleEditorContext)
  const [file, setFile] = useState<File | null>()
  const { addImage } = useUploads()
  const updateArticleUploads = useUpdateArticleUploads()

  const handleConfirmUpload = () => {
    if (file) {
      addImage(file)
        .then(async (response) => {
          const existingUploads = article.attributes.relatedUploads?.data.map((upload) => upload.id) ?? []
          await updateArticleUploads.mutateAsync({ id: article.id, uploads: [...existingUploads, response[0].id] })
          await queryClient.invalidateQueries({ queryKey: ['article'] })
          setFile(null)
        })
        .catch((error) => {
          console.error('Error uploading file:', error)
        })
    }
  }

  const getHandleSelection = (props: RenderContentProps) => {
    return (image: ApiImage) => {
      onSelect(image)
      props.closePopover()
    }
  }

  return (
    <>
      <PopoverButton
        onClose={() => {}}
        renderButton={renderButton}
        renderPopper={(props) => (
          <Stack direction="column" gap={1} p='5px' maxWidth='400px' maxHeight='500px' sx={{ overflowX: 'scroll' }}>
            <Stack direction='row' gap={1} alignItems='center' justifyContent='space-between' border='1px solid green' borderRadius='5px' padding='5px'>
              <FileInput onChange={(file) => setFile(file) }/>
              <Button onClick={handleConfirmUpload} variant='outlined'>Upload</Button>
            </Stack>
            <ArticleFileList
              images={images}
              onClick={getHandleSelection(props)}
            />
          </Stack>
        )}
      />
    </>
  )
}
