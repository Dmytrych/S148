import {API} from "@/api/axiosFetcher";
import {IProduct} from "@/api/DTO/products";
import {IOrderRequest} from "@/api/DTO/orders";

export async function createOrderApi(url: string, requestParams: IOrderRequest): Promise<void> {
    const response = await API.put(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestParams)
    });

    if (response.status < 200 || response.status >= 300) {
        throw new Error("Error while submitting your order");
    }

    return response.data;
}