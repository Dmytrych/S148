import {Editor, EditorContent} from '@tiptap/react'
import Divider from '@mui/material/Divider'
import EditorMenu from './EditorMenu'
import {RichTextEditorWrapperStyled} from "./RichTextEditor.styled.tsx";

type RichTextEditorProps = {
  editor: Editor
}

const RichTextEditor = ({ editor }: RichTextEditorProps) => {
  return (
    <RichTextEditorWrapperStyled padding={1} gap={1} minHeight={400}>
      <EditorMenu editor={editor} />
      <Divider />
      <EditorContent editor={editor} />
    </RichTextEditorWrapperStyled>
  )
}

export default RichTextEditor
