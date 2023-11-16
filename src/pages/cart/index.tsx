import {Cart} from "@/PageContent/Cart";
import {useCart} from "@/hooks/context/useCart";
import {IOrderFormFields} from "@/PageContent/Cart/hooks/useOrderForm";
import {useProducts} from "@/hooks/useProducts";
import {useCartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";
import {Routes} from "@/routes";
import {useRouter} from "next/router";
import {createOrderFromFormValues} from "@/pages/cart/helpers";

export default function CartPage() {
    const { replace } = useRouter();
    const { cart, removeFromCart, clearCart, addToCart } = useCart();
    const { data: productsData } = useProducts();

    const cartItemsWithProductInfo = useCartItemsWithProductInfo(cart, productsData?.data ?? []);

    const handleSubmit = async (values: IOrderFormFields): Promise<void> => {
        const createdRequest = await createOrderFromFormValues(values, cart)

        if (createdRequest) {
            clearCart();
            await replace(Routes.Products)
        }
    };

    const handleQuantityChange = (productCode: string, quantity: number) => {
      addToCart({
        productCode, quantity, append: false
      });
    }

    return (
        <Cart cartProducts={cartItemsWithProductInfo} onRemoveProduct={removeFromCart} onSubmit={handleSubmit} onQuantityChange={handleQuantityChange} />
    )
}