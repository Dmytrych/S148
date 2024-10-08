import {Product} from "@/api/DTO/products";
import {useMemo} from "react";
import { CartProductInfo } from "@/interfaces/cart/CartProductInfo";
import {ICartSelection} from "@/contexts/CartStateContext";

export function useCartItemsWithProductInfo(cartItems: ICartSelection[], products: Product[]): CartProductInfo[] {
  return useMemo(() => {
    if (!cartItems?.length || !products?.length) {
      return [];
    }

    return cartItems.map((cartItem) => {
      const product = products.find(p => p.id === cartItem.productId);
      return {
        productId: product?.id,
        product: product,
        quantity: cartItem.quantity
      } as CartProductInfo;
    })
  }, [cartItems, products]);
}