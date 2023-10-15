import {ICartSelection} from "@/contexts/CartContext";
import {IProduct} from "@/api/DTO/products";
import {useMemo} from "react";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";

export function useCartItemsWithProductInfo(cartItems: ICartSelection[], products: IProduct[]): CartProductInfo[] {
    return useMemo(() => {
        if (!cartItems?.length || !products?.length) {
            return [];
        }

        return cartItems.map((cartItem) => {
            const product = products.find(p => p.code === cartItem.productCode);
            return {
                ...cartItem,
                product
            } as CartProductInfo;
        })
    }, [cartItems, products]);
}