import {Box, IconButton, Stack, styled, Typography} from "@mui/material";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import {PriceTag} from "@/components/PriceTag";
import PlusMinusControl from "@/components/PlusMinusControl";
import Link from "next/link";
import {getProductRoute} from "@/helpers/links";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {noop} from "@/helpers/general";
import {getOptimizedImageUrl} from "@/helpers/product/get-optimized-image-url";
import ProductImage from "@/components/ProductImage/ProductImage";

const CartDisplayItemContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

interface Props {
  cartProductInfo: CartProductInfo;
  onQuantityChange?: (productId: number, quantity: number) => void;
  onRemove?: () => void;
}

export function CartDisplayItem({ cartProductInfo, onQuantityChange = noop, onRemove = noop }: Props) {
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(cartProductInfo.product.id, quantity);
  }

  const imageUrl = !!cartProductInfo.product?.attributes?.titleImage?.data ? getOptimizedImageUrl(cartProductInfo.product?.attributes?.titleImage?.data, "thumbnail") : undefined;

  return (
    <CartDisplayItemContainer>
      <Stack direction="row" spacing={3}>
        <ProductImage imageUrl={imageUrl} sx={{ width: "80px", height: "80px" }} alt={cartProductInfo.product.attributes.name} />
        <Stack direction="row" alignItems="space-between" flex={1}>
          <Box flex={1}>
            <Link href={getProductRoute(cartProductInfo.product.id.toString())}>
              <Typography variant="body1">
                {cartProductInfo.product.attributes.name}
              </Typography>
            </Link>
          </Box>
          <Box>
            <IconButton onClick={onRemove}>
              <DeleteOutlineOutlinedIcon/>
            </IconButton>
          </Box>
        </Stack>
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