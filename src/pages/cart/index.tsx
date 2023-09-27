import Cart from "@/PageContent/Cart";
import {useCart} from "@/hooks/context/useCart";

export function CartPage() {
    const { cart, removeFromCart } = useCart();

    return (
        <Cart />
    )
}