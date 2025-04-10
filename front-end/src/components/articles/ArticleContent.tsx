'use client'

import {EditorContent, Extensions, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import {Underline} from "@tiptap/extension-underline";
import {TextAlign} from "@tiptap/extension-text-align";
import {Link} from "@tiptap/extension-link";
import {ImageResize} from "@/components/articles/ImageResize";

type ArticleContentProps = {
  content: string;
}

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
  ImageResize
]

const ArticleContent = ({ content }: ArticleContentProps) => {
  const editor = useEditor({
    content,
    editable: false,
    extensions: extensions,
    immediatelyRender: false
  })

  return (
    <EditorContent editor={editor} />
  )
}

export default ArticleContent
