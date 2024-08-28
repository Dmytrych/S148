import {axiosServerInstance} from "@/api/axios-server";
import {getFetchData} from "@/helpers/api-helpers";

export const fetchDataFromServer = getFetchData(axiosServerInstance)