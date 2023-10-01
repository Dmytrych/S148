import Cart from "@/PageContent/Cart";
import {useCart} from "@/hooks/context/useCart";
import {IOrderFormFields} from "@/PageContent/Cart/hooks/useOrderForm";
import {useOrderCreation} from "@/hooks/useOrderCreation";

export default function CartPage() {
    const { cart, removeFromCart } = useCart();
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

        await createOrder(dataModel)
    };


    return (
        <Cart cartProducts={cart} onRemoveProduct={removeFromCart} onSubmitClick={handleSubmit} />
    )
}