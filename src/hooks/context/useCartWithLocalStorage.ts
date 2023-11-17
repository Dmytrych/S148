import {useContext, useEffect, useRef} from "react";
import {CartContext, ICartContext, ICartSelection} from "@/contexts/CartStateContext";
import {LocalStorageKey, useLocalStorage} from "@/hooks/localStorage/useLocalStorage";

export function useCartWithLocalStorage() {
  const loadedFromLocalStorage = useRef(false);
  const {cart, setCart} = useContext<ICartContext>(CartContext);
  const {setValue, loading, getValue} = useLocalStorage<ICartSelection[]>(LocalStorageKey.Cart, [])

  useEffect(() => {
    if (!loading) {
      const localStorageValue = getValue();
      if (localStorageValue) {
        setCart(() => {
          loadedFromLocalStorage.current = true
          return localStorageValue
        });
      }
    }
  }, [loading]);

  useEffect(() => {
    if (loadedFromLocalStorage.current && !loading) {
      setValue(cart)
    }
  }, [cart]);

  return {cart, loading, setCart}
}