import axios from "axios";
import {config} from "@/config";

export const axiosClientInstance = axios.create({
  baseURL: config.backendUrl
})

export const axiosServerInstance = axios.create({
  baseURL: config.serverBackendUrl
})