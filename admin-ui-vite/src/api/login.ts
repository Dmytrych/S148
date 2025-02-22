import {LoginRequest, LoginResponse} from "./DTO/login.ts";
import {axiosInstance} from "./axios-client.ts";

export async function getToken(requestParams: LoginRequest) {
  return axiosInstance.post<LoginResponse>('api/auth/local', requestParams)
}
