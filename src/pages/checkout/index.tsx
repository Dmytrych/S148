import {Checkout} from "@/PageContent/Checkout";
import {IOrderFormFields} from "@/PageContent/Checkout/hooks/useOrderForm";
import {useProducts} from "@/hooks/useProducts";
import {useCartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";
import {Routes} from "@/routes";
import {useRouter} from "next/router";
import {createOrderFromFormValues} from "@/PageContent/Checkout/helpers";
import {useCart} from "@/hooks/context/useCartState";

export default function CheckoutPage() {
  const { replace } = useRouter();
  const { cart, clearCart } = useCart();
  const { data: productsData } = useProducts();

  const cartItems = useCartItemsWithProductInfo(cart, productsData?.data ?? []);

  const cartItemsWithProductInfo = useCartItemsWithProductInfo(cart, productsData?.data ?? []);

  const handleSubmit = async (values: IOrderFormFields): Promise<void> => {
    const createdRequest = await createOrderFromFormValues(values, cartItems)

    if (createdRequest) {
      clearCart();
      await replace(Routes.Products)
    }
  };

  return (
    <Checkout cartProducts={cartItemsWithProductInfo} onSubmit={handleSubmit} />
  )
}