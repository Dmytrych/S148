'use client'

import {Box, Divider, Stack} from "@mui/material";
import {CartDisplayItem} from "@/components/cart/CartDisplayItem";
import BuyWithTotal from "@/components/cart/BuyWithTotal/BuyWithTotal";
import {useRouter} from "next/navigation";
import {Routes} from "@/routes";
import {useCart} from "@/hooks/context/useCartState";
import {useProducts} from "@/hooks/useProducts";
import {useMemo} from "react";
import {getCartProductInfos} from "@/helpers/cart/getCartProductInfo";
import CenteredLoader from "@/components/ui/CenteredLoader";
import EmptyCartState from "@/components/cart/EmptyCartState";

const CartDisplay = () => {
  const { cart, batchRemoveFromCart, addToCart, removeFromCart } = useCart();
  const { data: products, isLoading: productsLoading} = useProducts();

  const cartProducts = useMemo(() => {
    if (!products?.length || !cart.length) {
      return [];
    }

    const result = getCartProductInfos(cart, products);

    if (result?.notFoundIds?.length) {
      batchRemoveFromCart(result.notFoundIds);
    }

    return result.converted;
  }, [cart, products, batchRemoveFromCart]);

  const handleQuantityChange = (productId: number, quantity: number) => {
    addToCart({
      productId, quantity, append: false
    });
  }

  const handleRemove = async (productId: number) => {
    removeFromCart(productId);
  }

  const { replace } = useRouter();
  const totalPrice = cartProducts.reduce((acc, cartProduct) => acc + (cartProduct.product.attributes.price * cartProduct.quantity), 0);

  const handleGoToCart = () => {
    replace(Routes.Checkout);
  }

  if (productsLoading || !cartProducts) {
    return <CenteredLoader/>;
  }

  if (!cart.length) {
    return <EmptyCartState/>
  }

  return (<Stack direction="column" spacing={2}>
    <Stack direction="column" spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
      {cartProducts.map((product, index) => (
        <CartDisplayItem key={index} cartProductInfo={product} onQuantityChange={handleQuantityChange} onRemove={() => handleRemove(product.productId)}/>
      ))}
    </Stack>
    <Box display="flex" justifyContent="flex-end">
      <BuyWithTotal totalPrice={totalPrice} onBuyClick={handleGoToCart}/>
    </Box>
  </Stack>)
}

export default CartDisplay