import {AxiosRequestConfig} from "axios";
import {axiosInstance} from "@/api/axiosFetcher";

export const fetchData = async <TResponse>(url: string, config?: AxiosRequestConfig<any>): Promise<TResponse> => {
  try {
    const response = await axiosInstance(url, config);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
}