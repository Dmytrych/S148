import Cart from "@/PageContent/Cart";
import {useCart} from "@/hooks/context/useCart";
import {IOrderFormFields} from "@/PageContent/Cart/hooks/useOrderForm";
import {useOrderCreation} from "@/hooks/useOrderCreation";
import {useProducts} from "@/hooks/useProducts";
import {useCartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";

export default function CartPage() {
    const { cart, removeFromCart } = useCart();
    const { data: products } = useProducts();

    const cartItemsWithProductInfo = useCartItemsWithProductInfo(cart, products);
    const { createOrder } = useOrderCreation();

    const handleSubmit = async (values: IOrderFormFields): Promise<void> => {
        console.log(values);

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

        console.log(dataModel);

        await createOrder(dataModel)
    };


    return (
        <Cart cartProducts={cartItemsWithProductInfo} onRemoveProduct={removeFromCart} onSubmit={handleSubmit} />
    )
}