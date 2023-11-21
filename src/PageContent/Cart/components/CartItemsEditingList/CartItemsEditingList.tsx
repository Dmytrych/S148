import {useProducts} from "@/hooks/useProducts";
import {ContentLoader} from "@/components/ContentLoader/image";
import {CartDisplay} from "@/components/Cart/CartDisplay";
import {useMemo} from "react";
import {getCartProductInfos} from "@/helpers/cart/getCartProductInfo";
import {useCart} from "@/hooks/context/useCartState";
import {Box, Divider, Paper, Typography} from "@mui/material";
import {locale} from "@/locale/ua";

export function CartItemsEditingList() {
    const { cart, batchRemoveFromCart, addToCart } = useCart();
    const { data: products, isLoading: productsLoading} = useProducts();

    const { converted: cartProducts, notFoundIds } = useMemo(() => {
      if (!products?.data?.length || !cart.length) {
        return { converted: [], notFoundIds: [] };
      }

      return getCartProductInfos(cart, products?.data);
    }, [cart, products]);

    if (notFoundIds?.length) {
      batchRemoveFromCart(notFoundIds);
    }

    const handleQuantityChange = (productId: number, quantity: number) => {
      addToCart({
        productId, quantity, append: false
      });
    }

    return (
        <Paper elevation={4}>
          <Box px={3} pb={1} pt={2}>
            <Typography variant="h4">{locale.cart_page}</Typography>
          </Box>
          <Divider orientation="horizontal" />
          <Box px={3} pb={5} pt={3}>
            <ContentLoader isLoading={productsLoading}>
              <CartDisplay products={cartProducts} onQuantityChange={handleQuantityChange} />
            </ContentLoader>
          </Box>
        </Paper>
    )
}