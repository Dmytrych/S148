import {Editor, EditorContent} from '@tiptap/react'
import EditorMenu from './EditorMenu'
import {RichTextEditorWrapperStyled} from "./RichTextEditor.styled.tsx";
import {ApiImage} from "../../api/DTO/common/images.ts";
import {Box} from "@mui/material";

type RichTextEditorProps = {
  editor: Editor;
  availableImages: ApiImage[];
}

const RichTextEditor = ({ editor, availableImages }: RichTextEditorProps) => {
  return (
    <RichTextEditorWrapperStyled padding={1} gap={1} minHeight={400}>
      <EditorMenu editor={editor} imagesToSelect={availableImages} />
      <Box height='80vh' sx={{ overflowX: 'scroll' }}>
        <EditorContent editor={editor} />
      </Box>
    </RichTextEditorWrapperStyled>
  )
}

export default RichTextEditor
