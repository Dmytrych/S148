import {HomePageResponse} from "@/api/DTO/homePage";
import {fetchData} from "@/helpers/api-helpers";
import {ProductPopulateParams} from "@/api/products";

export async function fetchHomePageInfo(url: string): Promise<HomePageResponse> {
  const params = {
    populate: [ProductPopulateParams.Images, ProductPopulateParams.Characteristics]
  }

  return fetchData(url, { params } )
}