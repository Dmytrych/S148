import {IOrder, IOrderRequest} from "@/api/DTO/orders";
import {fetchDataFromClient} from "@/helpers/api-helpers";

export async function createOrder(url: string, requestParams: IOrderRequest): Promise<IOrder> {
  return fetchDataFromClient(url, { data: { data: requestParams }, method: "POST" });
}