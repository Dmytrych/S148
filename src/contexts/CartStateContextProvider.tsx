import * as React from "react";
import {CartContext, ICartSelection} from "@/contexts/CartStateContext";

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartStateContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = React.useState<ICartSelection[]>([]);

  return  (<CartContext.Provider value={{cart, setCart}}>
    {children}
  </ CartContext.Provider>)
}