import {ApiRoutes} from "@/api/apiRoutes";
import {fetchHomePageInfo} from "@/api/homePage";
import {useFetch} from "@/hooks/useFetch";

export function useHomePageInfo() {
  return useFetch(
    ApiRoutes.homePage(),
    (url) => fetchHomePageInfo(url) )
}