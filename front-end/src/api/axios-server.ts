import axios from "axios";

export const axiosServerInstance = axios.create({
  baseURL: process.env.BACK_END_URL
})

axios.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify({ method: request?.method, url: request?.url }))
  return request
})

axios.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify({ status: response?.status, url: response.request?.url }))
  return response
})