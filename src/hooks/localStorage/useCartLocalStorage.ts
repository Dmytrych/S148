import {LocalStorageKey, useLocalStorage} from "@/hooks/localStorage/useLocalStorage";
import {ICartProduct} from "@/contexts/CartContext";

export function useCartLocalStorage() {
    return useLocalStorage<ICartProduct[]>(LocalStorageKey.Cart, []);
}