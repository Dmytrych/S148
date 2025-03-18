import {Extensions, useEditor} from "@tiptap/react";
import {Underline} from "@tiptap/extension-underline";
import {StarterKit} from "@tiptap/starter-kit";
import {TextAlign} from "@tiptap/extension-text-align";
import {Link} from "@tiptap/extension-link";
import {Image} from "@tiptap/extension-image";
import RichTextEditor from "../rich-text-editor/RichTextEditor.tsx";
import {ApiImage} from "../../api/DTO/common/images.ts";

const extensions: Extensions = [
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
  Image
]

type ArticleRteFormFieldProps = {
  value: string;
  onChange: (value: string) => void;
  availableImages: ApiImage[];
}

function ArticleRteFormField({ value, onChange, availableImages }: ArticleRteFormFieldProps) {
  const editor = useEditor({
    content: value,
    extensions,
    onUpdate: (updateEvent) => {
      onChange(updateEvent.editor.getHTML())
    }
  })

  if (!editor) {
    return null
  }

  return <RichTextEditor editor={editor} availableImages={availableImages} />
}

export default ArticleRteFormField
