import Cart from "@/PageContent/Cart";
import {useCart} from "@/hooks/context/useCart";
import {IOrderFormFields} from "@/PageContent/Cart/hooks/useOrderForm";
import {create} from "@/repositories/api";

export function CartPage() {
    const { cart, removeFromCart } = useCart();

    const handleSubmit = async (values: IOrderFormFields): Promise<void> => {
        const dataModel = {
            description: values.description,
            customerModel: {
                name: values.name,
                surname: values.surname,
                middleName: values.middleName,
                phoneNumber: values.phoneNumber,
                email: values.email,
            },
            products: cart.map((cartProduct) => ({
                productId: cartProduct.product.id,
                quantity: cartProduct.quantity,
            })),
        };
    };


    return (
        <Cart cartProducts={cart} onRemoveProduct={removeFromCart} onSubmitClick={handleSubmit} />
    )
}