import {ICartProduct} from "@/contexts/CartContext";
import {IProduct} from "@/api/DTO/products";
import {useMemo} from "react";

export interface ICartItemsWithProductInfo extends ICartProduct {
    product: IProduct;
}

export function useCartItemsWithProductInfo(cartItems?: ICartProduct[], products?: IProduct[]): ICartItemsWithProductInfo[] {
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
                product
            }
        })
    }, [cartItems, products]);
}