import axios from "axios";
import {config} from "@/config";

export const axiosClientInstance = axios.create({
  baseURL: config.backendUrl
})