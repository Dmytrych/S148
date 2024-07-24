import {IOrder, IOrderRequest} from "@/api/DTO/orders";
import {fetchData} from "@/helpers/api-helpers";

export async function createOrder(url: string, requestParams: IOrderRequest): Promise<IOrder> {
  return fetchData(url, { data: { data: requestParams }, method: "POST" });
}