import {CartContext, ICartContext} from "@/contexts/CartContext";
import {useContext} from "react";
import {useCartLocalStorage} from "@/hooks/localStorage/useCartLocalStorage";

export interface IAddToCartParams {
    productCode: string;
    quantity: number;
    append?: boolean;
}

export function useCart() {
    return  useContext<ICartContext>(CartContext);
}