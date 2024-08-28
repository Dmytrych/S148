import {axiosServerInstance} from "@/api/axiosFetcher";
import {getFetchData} from "@/helpers/api-helpers";

export const fetchDataFromServer = getFetchData(axiosServerInstance)