import Cart from "@/PageContent/Cart";
import {useCart} from "@/hooks/context/useCart";
import {IOrderFormFields} from "@/PageContent/Cart/hooks/useOrderForm";
import {useOrderCreation} from "@/hooks/useOrderCreation";
import {useProducts} from "@/hooks/useProducts";
import {useCartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";
import {Routes} from "@/routes";
import {useRouter} from "next/router";

export default function CartPage() {
    const { replace } = useRouter();
    const { cart, removeFromCart, clearCart, addToCart } = useCart();
    const { data: productsData } = useProducts();

    const cartItemsWithProductInfo = useCartItemsWithProductInfo(cart, productsData?.data ?? []);
    const { createOrder } = useOrderCreation();

    const handleSubmit = async (values: IOrderFormFields): Promise<void> => {
        const dataModel = {
            customerInfo: {
                name: values.name,
                surname: values.surname,
                middleName: values.middleName,
                phoneNumber: values.phoneNumber,
                email: values.email,
            },
            items: cart.map((cartProduct) => ({
                productCode: cartProduct.productCode,
                quantity: cartProduct.quantity,
            })),
            deliveryInfo: {
                description: values.description,
            }
        };

        const createdRequest = await createOrder(dataModel)

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