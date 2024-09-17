import {OrderRequestData, OrderRequest, OrderPopulateParams} from "@/api/DTO/orders";
import {fetchDataFromClient} from "@/helpers/api-helpers";
import {fetchWithToken} from "@/services/authService";

export async function createOrder(url: string, requestParams: OrderRequest): Promise<OrderRequestData> {
  return fetchDataFromClient(url, { data: { data: requestParams }, method: "POST" });
}

export async function getOrders(url: string): Promise<OrderRequestData> {
  const params = {
    populate: [OrderPopulateParams.CustomerInfo, OrderPopulateParams.DeliveryInfo, OrderPopulateParams.Items]
  }

  return fetchWithToken<OrderRequestData>(url, { method: "GET", params });
}