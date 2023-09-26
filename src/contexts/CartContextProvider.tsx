import * as React from "react";
import {CartContext, ICartProduct} from "@/contexts/CartContext";

interface CartContextProviderProps {
    children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = React.useState<ICartProduct[]>([]);

    return  (<CartContext.Provider value={{cart, saveCart: setCart}}>
        {children}
    </ CartContext.Provider>)
}