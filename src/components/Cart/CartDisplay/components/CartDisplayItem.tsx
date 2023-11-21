import {Box, Stack, styled, Typography} from "@mui/material";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import ProductImage from "@/components/ProductImage/ProductImage";
import {PriceTag} from "@/components/PriceTag";
import PlusMinusControl from "@/components/PlusMinusControl";
import Link from "next/link";
import {getProductPageRoute} from "@/helpers/links";

interface Props {
  cartProductInfo: CartProductInfo;
  onQuantityChange?: (productId: number, quantity: number) => void;
}

export function CartDisplayItem({ cartProductInfo, onQuantityChange = () => {} }: Props) {
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(cartProductInfo.product.id, quantity);
  }

  return (
    <CartDisplayItemContainer>
      <Stack direction="row" spacing={3}>
        <ProductImage imageUrl={cartProductInfo.product.attributes.images?.data[0].attributes.url} sx={{ width: "80px", height: "80px" }} />
        <Link href={getProductPageRoute(cartProductInfo.product.attributes.code)}>
          <Typography variant="body1">
            {cartProductInfo.product.attributes.name}
          </Typography>
        </Link>
      </Stack>
      <Box display="flex" justifyContent="flex-end">
        <Stack direction="row">
          <Box display="flex" justifyContent="flex-end" alignItems="center" width="100px">
            <PlusMinusControl defaultValue={cartProductInfo.quantity} onChange={handleQuantityChange} />
          </Box>
          <Box display="flex" justifyContent="flex-end" alignItems="center" width="200px">
            <PriceTag price={cartProductInfo.product.attributes.price * cartProductInfo.quantity} />
          </Box>
        </Stack>
      </Box>
    </CartDisplayItemContainer>
  )
}

const CartDisplayItemContainer = styled(Box)(({theme}) => {
  return {
    display: "flex",
    flexDirection: "column",
  }
});