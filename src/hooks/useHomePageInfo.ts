import useSWR from "swr";
import {ApiRoutes} from "@/api/apiRoutes";
import {homePageInfoFetcher} from "@/api/homePage";

export function useHomePageInfo() {
  return useSWR(
    ApiRoutes.HomePage,
    (url) => homePageInfoFetcher(url) )
}