import {AxiosRequestConfig} from "axios";
import {axiosClientInstance} from "@/api/axios-client";
import {axiosServerInstance} from "@/api/axios-server";
import qs from 'qs';

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

type QueryParam = string | number | (string | number)[]

type FetchDataParams = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body?: any;
  headers?: Record<string, string>;
  queryParams?: Record<string, QueryParam>;
  otherOptions?: any;
};

type FetchResult<T> = {
  data?: T;
  error?: string;
};

export async function fetchFromServer<T>({ method, url, body, headers = {}, otherOptions, queryParams }: FetchDataParams): Promise<FetchResult<T> | undefined> {
  try {
    const fullUrl = `${process.env.BACK_END_URL}${url}?${qs.stringify(queryParams, { arrayFormat: 'brackets' })}`

    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...(body && { body: JSON.stringify(body) }),
      ...otherOptions
    };

    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      const errorText = await response.text();
      return { error: `Error ${response.status}: ${errorText || response.statusText}` };
    }

    const data = (await response.json()) as T;
    return { data };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`Request failed: ${error.message}`)
      return;
    }

    console.log('An unknown error occurred')
    return;
  }
}