import {Box, Divider, Stack} from "@mui/material";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import {CartDisplayItem} from "@/components/Cart/CartDisplay/components/CartDisplayItem";
import {BuyWithTotal} from "@/components/Cart/CartDisplay/components/BuyWithTotal/BuyWithTotal";
import {useRouter} from "next/router";
import {Routes} from "@/routes";

interface IProps {
    products: CartProductInfo[];
    onQuantityChange: (productId: number, quantity: number) => void;
}

export function CartDisplay({products, onQuantityChange}: IProps) {
  const { replace } = useRouter();
  const totalPrice = products.reduce((acc, cartProduct) => acc + (cartProduct.product.attributes.price * cartProduct.quantity), 0);

  const handleGoToCart = () => {
    replace(Routes.Checkout);
  }

  return (<Stack direction="column" spacing={2}>
    <Stack direction="column" spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
      {products.map((product, index) => (
        <CartDisplayItem key={index} cartProductInfo={product} onQuantityChange={onQuantityChange}/>
      ))}
    </Stack>
    <Box display="flex" justifyContent="flex-end">
      <BuyWithTotal totalPrice={totalPrice} onBuyClick={handleGoToCart}/>
    </Box>
  </Stack>)
}