import {ICartSelection} from "@/contexts/CartContext";
import {Product} from "@/api/DTO/products";
import {useMemo} from "react";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";

export function useCartItemsWithProductInfo(cartItems: ICartSelection[], products: Product[]): CartProductInfo[] {
    return useMemo(() => {
        if (!cartItems?.length || !products?.length) {
            return [];
        }

        return cartItems.map((cartItem) => {
            const product = products.find(p => p.attributes.code === cartItem.productId);
            return {
                productId: product?.attributes.code,
                product: product,
                quantity: cartItem.quantity
            } as CartProductInfo;
        })
    }, [cartItems, products]);
}