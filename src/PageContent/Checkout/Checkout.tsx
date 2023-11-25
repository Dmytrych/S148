import {IOrderFormFields} from "@/PageContent/Checkout/hooks/useOrderForm";
import React, {useState} from "react";
import {useCart} from "@/hooks/context/useCartState";
import {useProducts} from "@/hooks/useProducts";
import {useCartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";
import {createOrderFromFormValues} from "@/PageContent/Checkout/helpers";
import {CheckoutForm} from "@/components/Forms/CheckoutForm";
import {CheckoutSuccessView} from "@/components/CheckoutSuccessView/CheckoutSuccessView";

export function Checkout() {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const { cart, clearCart } = useCart();
  const { data: productsData } = useProducts();

  const cartItems = useCartItemsWithProductInfo(cart, productsData?.data ?? []);

  const handleSubmit = async (values: IOrderFormFields): Promise<void> => {
    const createdRequest = await createOrderFromFormValues(values, cartItems)

    if (createdRequest) {
      setCheckoutSuccess(true);
      clearCart();
    }
  };

  return (
    <>
      {!checkoutSuccess ? (
        <CheckoutForm cartProducts={cartItems} onSubmit={handleSubmit}/>
      ) : (
        <CheckoutSuccessView/>
      )}
    </>
  );
}
