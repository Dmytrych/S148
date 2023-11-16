import {Product} from "@/api/DTO/products";
import {useCart} from "@/hooks/context/useCart";
import {useState} from "react";

export function useProductCartControls(product: Product) {
    const [quantity, setQuantity] = useState<number>(1);
    const { addToCart: addProductToCart } = useCart()

    const addToCart = () => {
        addProductToCart({ productCode: product.attributes.code, quantity: quantity, append: true })
    }

    return { quantity, setQuantity, addToCart };
}