import {API} from "@/api/axiosFetcher";
import {IOrder, IOrderRequest} from "@/api/DTO/orders";

export async function createOrderApi(url: string, requestParams: IOrderRequest): Promise<IOrder> {
  const response = await API.post<IOrder>(url, requestParams);

  if (response.status < 200 || response.status >= 300) {
    throw new Error("Error while submitting your order");
  }

  return response.data;
}