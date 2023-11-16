import {CartDisplay} from "@/components/Cart/CartDisplay";
import {useProducts} from "@/hooks/useProducts";
import {useCart} from "@/hooks/context/useCart";

export function CartItemsEditingList() {
    const { cart } = useCart();
    const { data: products, isLoading: productsLoading} = useProducts();

    return (
        <CartDisplay products={} onQuantityChange={}
    )
}