import {LocalStorageKey, useLocalStorage} from "@/hooks/localStorage/useLocalStorage";
import {ICartSelection} from "@/contexts/CartContext";

export function useCartLocalStorage() {
    return useLocalStorage<ICartSelection[]>(LocalStorageKey.Cart, []);
}