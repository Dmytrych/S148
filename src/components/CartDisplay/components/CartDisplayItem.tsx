import {Box, styled, Typography} from "@mui/material";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import ProductImage from "@/components/ProductImage/ProductImage";
import {PriceTag, Size} from "@/components/PriceTag";
import PlusMinusControl from "@/components/PlusMinusControl";
import Link from "next/link";
import {getProductPageRoute} from "@/helpers/links";

interface Props {
  cartProductInfo: CartProductInfo;
  onQuantityChange?: (productCode: string, quantity: number) => void;
}

export function CartDisplayItem({ cartProductInfo, onQuantityChange = () => {} }: Props) {
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(cartProductInfo.product.code, quantity);
  }

  return (
    <CartDisplayItemContainer>
      <Box display="flex" flexDirection="row" flexGrow="1">
        <Box>
          <ProductImage imageName={cartProductInfo.product.options.image} width="96px" height="96px" />
        </Box>
        <Box display="flex" flexDirection="column">
          <Box ml={3}>
            <Link href={getProductPageRoute(cartProductInfo.productCode)} style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="link">
                {cartProductInfo.product.name}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box display="flex" flexDirection="row">
          <Box display="flex" justifyContent="flex-end" alignItems="center" flexGrow={2}>
            <PlusMinusControl defaultValue={cartProductInfo.quantity} onChange={handleQuantityChange} />
          </Box>
          <Box display="flex" justifyContent="flex-end" alignItems="center" flexGrow={1}>
            <PriceTag price={cartProductInfo.product.price * cartProductInfo.quantity} />
          </Box>
        </Box>
      </Box>
    </CartDisplayItemContainer>
  )
}

const CartDisplayItemContainer = styled(Box)(({theme}) => {
  return {
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    minHeight: "170px",
    borderBottom: `1px solid ${theme.palette.border.main}`,
  }
});