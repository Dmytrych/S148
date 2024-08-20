'use client'

import * as React from "react";
import {CartContext, ICartSelection} from "@/contexts/CartStateContext";
import {useEffect, useRef} from "react";
import {LocalStorageKeys} from "@/constants/localStorageKeys";

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartStateContextProvider({ children }: CartContextProviderProps) {
  const cartLoadedRef = useRef(false);
  const [cart, setCart] = React.useState<ICartSelection[]>([]);

  useEffect(() => {
    if (!cartLoadedRef.current) {
      const item = localStorage.getItem(LocalStorageKeys.Cart);
      const savedCart = item ? JSON.parse(item) : [];
      setCart(() => savedCart);
      cartLoadedRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (cartLoadedRef.current) {
      localStorage.setItem(LocalStorageKeys.Cart, JSON.stringify(cart));
    }
  }, [cart]);

  return  (<CartContext.Provider value={{cart, setCart}}>
    {children}
  </ CartContext.Provider>)
}