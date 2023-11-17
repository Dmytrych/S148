import {CartContext, ICartContext} from "@/contexts/CartContext";
import {useContext} from "react";

export interface IAddToCartParams {
    productId: number;
    quantity: number;
    append?: boolean;
}

export function useCart() {
    return useContext<ICartContext>(CartContext);
}