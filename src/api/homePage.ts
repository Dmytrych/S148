import {API} from "@/api/axiosFetcher";
import {HomePageResponse} from "@/api/DTO/homePage";

export async function homePageInfoFetcher(url: string): Promise<HomePageResponse> {
  const params = {
    populate: ["blocks", "blocks.image"]
  }

  const response = await API.get<HomePageResponse>(url, { params });

  if (response.status < 200 || response.status >= 300) {
    throw new Error("Error while submitting your order");
  }

  return response.data;
}