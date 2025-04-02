import axios from "axios";
import {config} from "../config.ts";
import {LOCAL_STORAGE_JWT_KEY} from "../hooks/use-login.ts";

export const axiosInstance = axios.create({
  baseURL: config.backendUrl
})

axiosInstance.interceptors.request.use(
  (reqConfig) => {
    const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
    if (token) {
      reqConfig.headers.Authorization = `Bearer ${token}`;
    }
    return reqConfig;
  },
  (error) => Promise.reject(error)
);

