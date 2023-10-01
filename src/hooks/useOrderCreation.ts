import {ApiRoutes} from "@/api/apiRoutes";
import {IOrderRequest} from "@/api/DTO/orders";
import {createOrderApi} from "@/api/orders";

export function useOrderCreation() {
    const createOrder = async (orderRequest: IOrderRequest) => {
        if (!orderRequest) {
            throw new Error("Order request is empty");
        }

        const response = await createOrderApi(ApiRoutes.Orders, orderRequest)

        console.log(response)
        // response processing
    }

    return {createOrder}
}