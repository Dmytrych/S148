import {ICartSelection} from "@/contexts/CartContext";
import {IProduct} from "@/api/DTO/products";
import {useMemo} from "react";
import {CartProduct} from "@/interfaces/cart/CartProduct";

export function useCartItemsWithProductInfo(cartItems?: ICartSelection[], products?: IProduct[]): CartProduct[] {
    return useMemo(() => {
        if (!cartItems || !products) {
            return [];
        }

        return cartItems.map(cartItem => {
            const product = products.find(p => p.code === cartItem.productCode);
            if (!product) {
                throw new Error(`Product with code ${cartItem.productCode} not found.`);
            }
            return {
                ...cartItem,
                ...product
            }
        })
    }, [cartItems, products]);
}