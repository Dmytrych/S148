import {ApiRoutes} from "@/api/apiRoutes";
import {IOrderRequest} from "@/api/DTO/orders";
import {createOrderApi} from "@/api/orders";

export function useOrderCreation() {
    const createOrder = async (orderRequest: IOrderRequest) => {
        try {
            if (!orderRequest) {
                return undefined;
            }

            return await createOrderApi(ApiRoutes.Orders, orderRequest)
        } catch (e) {
            // TODO: Add error message appearance
            return undefined;
        }
    }

    return {createOrder}
}