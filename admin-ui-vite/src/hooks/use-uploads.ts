import {addUpload} from "../api/uploads.ts";

export default function useUploads() {
  const addImage = async (file: File) => {
    return addUpload(file)
  };

  return {
    addImage
  };
}
