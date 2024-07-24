import useSWR from "swr";
import {ApiRoutes} from "@/api/apiRoutes";
import {fetchHomePageInfo} from "@/api/homePage";

export function useHomePageInfo() {
  return useSWR(
    ApiRoutes.HomePage,
    (url) => fetchHomePageInfo(url) )
}