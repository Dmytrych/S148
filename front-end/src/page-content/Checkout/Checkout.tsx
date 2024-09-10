'use client'

import {IOrderFormFields} from "@/page-content/Checkout/hooks/useOrderForm";
import React, {useState} from "react";
import {useCart} from "@/hooks/context/useCartState";
import {useProducts} from "@/hooks/useProducts";
import {useCartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";
import {createOrderFromFormValues} from "@/page-content/Checkout/helpers";
import {CheckoutSuccessView} from "@/components/CheckoutSuccessView/CheckoutSuccessView";
import {CheckoutForm} from "@/components/checkout/CheckoutForm";

export function Checkout() {
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const { cart, clearCart } = useCart();
  const { data: productsData } = useProducts();

  const cartItems = useCartItemsWithProductInfo(cart, productsData ?? []);

  const handleSubmit = async (values: IOrderFormFields): Promise<void> => {
    setCheckoutLoading(() => true)
    const createdRequest = await createOrderFromFormValues(values, cartItems)

    if (createdRequest) {
      setCheckoutSuccess(true);
      clearCart();
    }
    setCheckoutLoading(() => false)
  };

  return (
    <>
      {!checkoutSuccess ? (
        <CheckoutForm cartProducts={cartItems} onSubmit={handleSubmit} isLoading={isCheckoutLoading}/>
      ) : (
        <CheckoutSuccessView/>
      )}
    </>
  );
}
