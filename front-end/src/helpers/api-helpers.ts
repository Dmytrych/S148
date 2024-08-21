import {AxiosRequestConfig} from "axios";
import {axiosClientInstance} from "@/api/axios-client";
import {axiosServerInstance} from "@/api/axios-server";

export const getFetchData = (axiosInstance = axiosClientInstance) => {
  return async <TResponse>(url: string, config?: AxiosRequestConfig<any>): Promise<TResponse> => {
    try {
      const response = await axiosInstance(url, config);
      return response.data;
    } catch (error) {
      console.error('Error retrieving data:', error);
      throw new Error('Could not get data');
    }
  }
}

export const fetchDataFromClient = getFetchData(axiosClientInstance)

export const fetchDataFromServer = getFetchData(axiosServerInstance)