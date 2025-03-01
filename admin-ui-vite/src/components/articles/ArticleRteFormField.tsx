import {useEditor} from "@tiptap/react";
import {Underline} from "@tiptap/extension-underline";
import {StarterKit} from "@tiptap/starter-kit";
import {TextAlign} from "@tiptap/extension-text-align";
import {Link} from "@tiptap/extension-link";
import RichTextEditor from "../rich-text-editor/RichTextEditor.tsx";

const extensions = [
  StarterKit,
  Underline,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Link.configure({
    autolink: true,
    defaultProtocol: 'https',
    openOnClick: false,
  }),
  Image,
  History
]

type ArticleRteFormFieldProps = {
  value: string;
  onChange: (value: string) => void;
}

function ArticleRteFormField({ value, onChange }: ArticleRteFormFieldProps) {
  const editor = useEditor({
    content: value,
    extensions,
    onUpdate: (updateEvent) => {
      onChange(updateEvent.editor.getHTML())
    }
  })

  return <RichTextEditor editor={editor} />
}

export default ArticleRteFormField
