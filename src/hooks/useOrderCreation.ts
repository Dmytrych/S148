import {ApiRoutes} from "@/api/apiRoutes";
import {IOrderRequest} from "@/api/DTO/orders";
import {createOrderApi} from "@/api/orders";

export function useOrderCreation() {
    const createOrder = async (orderRequest: IOrderRequest) => {
        if (!orderRequest) {
            throw new Error("Order request is empty");
        }

        await createOrderApi(ApiRoutes.Orders, orderRequest)

        // response processing
    }

    return {createOrder}
}