import {Box, styled, Typography} from "@mui/material";
import {CartProduct} from "@/interfaces/cart/CartProduct";
import ImageBox from "@/components/ImageBox";
import {PriceTag, Size} from "@/components/PriceTag";
import PlusMinusControl from "@/components/PlusMinusControl";

interface Props {
  product: CartProduct;
  onQuantityChange?: (productCode: string, quantity: number) => void;
}

export function CartDisplayItem({ product, onQuantityChange = () => {} }: Props) {
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(product.code, quantity);
  }

  return (
    <CartDisplayItemContainer>
      <Box display="flex" flexDirection="row" flexGrow="1">
        <Box>
          <ImageBox imageName={product.options.image} width="96px" height="96px" />
        </Box>
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography variant="link">{product.name}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box display="flex" flexDirection="row">
          <Box display="flex" justifyContent="flex-end" alignItems="center" flexGrow={2}>
            <PlusMinusControl defaultValue={product.quantity} onChange={handleQuantityChange} />
          </Box>
          <Box display="flex" justifyContent="flex-end" alignItems="center" flexGrow={1}>
            <PriceTag value={(product.price.base * product.quantity).toString()} size={Size.Medium} currencySize={Size.Medium} />
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