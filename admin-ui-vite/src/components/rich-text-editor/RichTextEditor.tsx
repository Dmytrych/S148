import {Editor, EditorContent} from '@tiptap/react'
import Divider from '@mui/material/Divider'
import EditorMenu from './EditorMenu'
import {RichTextEditorWrapperStyled} from "./RichTextEditor.styled.tsx";
import {ApiImage} from "../../api/DTO/common/images.ts";

type RichTextEditorProps = {
  editor: Editor;
  availableImages: ApiImage[];
}

const RichTextEditor = ({ editor, availableImages }: RichTextEditorProps) => {
  return (
    <RichTextEditorWrapperStyled padding={1} gap={1} minHeight={400}>
      <EditorMenu editor={editor} imagesToSelect={availableImages} />
      <Divider />
      <EditorContent editor={editor} />
    </RichTextEditorWrapperStyled>
  )
}

export default RichTextEditor
