import {Box} from '@mui/material';
import {IOrderFormFields} from "@/PageContent/Checkout/hooks/useOrderForm";
import React from "react";
import {useRouter} from "next/router";
import {useCart} from "@/hooks/context/useCartState";
import {useProducts} from "@/hooks/useProducts";
import {useCartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";
import {createOrderFromFormValues} from "@/PageContent/Checkout/helpers";
import {Routes} from "@/routes";
import {CheckoutForm} from "@/components/Forms/CheckoutForm";
import {CheckoutSuccessView} from "@/components/CheckoutSuccessView/CheckoutSuccessView";

export function Checkout() {
  const { replace } = useRouter();
  const { cart, clearCart } = useCart();
  const { data: productsData } = useProducts();

  const cartItems = useCartItemsWithProductInfo(cart, productsData?.data ?? []);

  const handleSubmit = async (values: IOrderFormFields): Promise<void> => {
    const createdRequest = await createOrderFromFormValues(values, cartItems)

    if (createdRequest) {
      await replace(Routes.Products).then(() => clearCart());
    }
  };

  return (
    <>
      {false ? (
        <CheckoutForm cartProducts={cartItems} onSubmit={handleSubmit}/>
      ) : (
        <CheckoutSuccessView/>
      )}
    </>
  );
}
