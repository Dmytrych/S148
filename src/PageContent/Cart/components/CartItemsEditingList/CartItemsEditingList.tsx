import {useProducts} from "@/hooks/useProducts";
import {ContentLoader} from "@/components/ContentLoader/image";
import {CartDisplay} from "@/components/Cart/CartDisplay";
import {useMemo} from "react";
import {getCartProductInfos} from "@/helpers/cart/getCartProductInfo";
import {useCart} from "@/hooks/context/useCartState";

export function CartItemsEditingList() {
    const { cart, batchRemoveFromCart, addToCart } = useCart();
    const { data: products, isLoading: productsLoading} = useProducts();

    console.log(cart)

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
        <ContentLoader isLoading={productsLoading}>
            <CartDisplay products={cartProducts} onQuantityChange={handleQuantityChange} />
        </ContentLoader>
    )
}