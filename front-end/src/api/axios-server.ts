import axios from "axios";

export const axiosServerInstance = axios.create({
  baseURL: process.env.BACK_END_URL
})