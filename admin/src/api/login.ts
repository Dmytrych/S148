import {fetchDataFromClient} from "@/helpers/api-helpers";
import {LoginRequest, LoginResponse} from "@/api/DTO/login";

export async function getToken(url: string, requestParams: LoginRequest): Promise<LoginResponse> {
  return fetchDataFromClient(url, { data: requestParams, method: "POST" });
}