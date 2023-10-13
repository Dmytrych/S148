import * as React from "react";
import {CartContext, ICartSelection} from "@/contexts/CartContext";
import {IAddToCartParams} from "@/hooks/context/useCart";
import {useCartLocalStorage} from "@/hooks/localStorage/useCartLocalStorage";
import {useEffect} from "react";

interface CartContextProviderProps {
    children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const isMounted = React.useRef(false);
    const { getValue, setValue } = useCartLocalStorage();
    const [cart, setCart] = React.useState<ICartSelection[]>([]);

    useEffect(() => {
        if (!isMounted.current) {
            setCart(getValue() ?? [])
        }
        isMounted.current = true;
    })

    const addToCart = ({ productCode, quantity, append }: IAddToCartParams) => {
        if (quantity && quantity <= 0) {
            throw new Error("Quantity should be positive");
        }

        const existingItem = cart.find((item) => item.productCode === productCode);

        if (!existingItem) {
            setCart((cart) => [...cart, { productCode, quantity }]);
            return;
        }

        if (append) {
            existingItem.quantity += quantity;
        } else {
            existingItem.quantity = quantity;
        }

        setCart((cart) => {
            const newCart = [...cart];
            setValue(newCart);
            return newCart;
        });
    }

    const removeFromCart = (productCode: string) => {
        setCart((cart) => {
            const newCart = cart.filter((item) => item.productCode !== productCode);
            setValue(newCart)
            return newCart;
        });
    }

    const clearCart = () => {
        setCart(() => {
            setValue([]);
            return [];
        });
    }

    return  (<CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
        {children}
    </ CartContext.Provider>)
}