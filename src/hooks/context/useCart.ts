import {CartContext, ICartContext} from "@/contexts/CartContext";
import {useContext} from "react";

export interface IAddToCartParams {
    productCode: string;
    quantity: number;
    append?: boolean;
}

export function useCart() {
    const { cart, saveCart } = useContext<ICartContext>(CartContext);

    const addToCart = ({ productCode, quantity, append }: IAddToCartParams) => {
        if (quantity && quantity <= 0) {
            throw new Error("Quantity should be positive");
        }

        const existingItem = cart.find((item) => item.productCode === productCode);

        if (!existingItem) {
            saveCart((cart) => [...cart, { productCode, quantity }]);
            return;
        }

        if (append) {
            existingItem.quantity += quantity;
        } else {
            existingItem.quantity = quantity;
        }

        saveCart((cart) => [...cart]);
    }

    const removeFromCart = (productCode: string) => {
        saveCart((cart) => cart.filter((item) => item.productCode !== productCode));
    }

    const clearCart = () => {
        saveCart([]);
    }

    return { cart, addToCart, removeFromCart, clearCart };
}