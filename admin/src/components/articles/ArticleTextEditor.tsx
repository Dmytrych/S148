'use client'

import {useState} from "react";
import {TextEditor} from "mui-tiptap-editor";

type ArticleTextEditorProps = {
  initialText?: string;
}

const ArticleTextEditor = ({ initialText = "" }: ArticleTextEditorProps) => {
  const [value, setValue] = useState<string>(initialText);

  const handleChange = (newValue: string) => {
    setValue(newValue)
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return { id: data.filename, src: data.location };
  };

  return (
    <>
      <TextEditor
        value={value}
        onChange={handleChange}
        uploadFileOptions={{
          uploadFile, // the image is stored and used as base64 string if not specified
          maxSize: 5, // max size to 10MB if not specified
          maxFilesNumber: 2,  // max 5 files if not specified
          allowedMimeTypes: ['image/jpeg', 'image/png', 'image/jpg'], // all image types if not specified
          imageMaxWidth: 400, // default to 1920
          imageMaxHeight: 400, // default to 1080
        }}
      />
    </>
  )
}

export default ArticleTextEditor
