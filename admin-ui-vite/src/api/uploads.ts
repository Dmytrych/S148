import {axiosInstance} from "./axios-client.ts";
import {ApiImage} from "./DTO/common/images.ts";

export async function addUpload(file: File) {
  const formData = new FormData();
  formData.append('files', file);

  try {
    const response = await axiosInstance.post<ApiImage[]>('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}
