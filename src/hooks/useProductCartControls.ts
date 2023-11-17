import {Product} from "@/api/DTO/products";
import {useState} from "react";
import { useCart } from "./context/useCartState";

export function useProductCartControls(product: Product) {
    const [quantity, setQuantity] = useState<number>(1);
    const { addToCart: addProductToCart } = useCart()

    const addToCart = () => {
        addProductToCart({ productId: product.id, quantity: quantity, append: true })
    }

    return { quantity, setQuantity, addToCart };
}