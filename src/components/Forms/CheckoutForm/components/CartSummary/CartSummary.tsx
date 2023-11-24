import React, {useMemo} from 'react'
import {locale} from '@/locale/ua';
import {Box, Typography} from "@mui/material";
import {PriceTag} from "@/components/PriceTag";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import {
  CartSummaryBackground,
  CartSummaryContent, StyledConfirmButton,
  ToBePaidContainer
} from "@/components/Forms/CheckoutForm/components/CartSummary/CartSummary.styles";
import {CartSummaryRow} from "@/components/Forms/CheckoutForm/components/CartSummaryRow";

interface ICartSummaryProps {
    cartProducts: CartProductInfo[];
    disableSubmit: boolean;
    onSubmitClick: () => Promise<void> | void;
}

export function CartSummary({ cartProducts, disableSubmit, onSubmitClick}: ICartSummaryProps) {
  const totalPrice = useMemo(() =>
    cartProducts.reduce((acc, cartProduct) => acc + (cartProduct.product.attributes.price * cartProduct.quantity), 0),
  [cartProducts])

  return (
    <CartSummaryBackground>
      <CartSummaryContent>
        <Box>
          <Typography variant="h4">{locale.total}</Typography>
        </Box>
        <Box display="flex" mt="14px" flexDirection="column">
          <CartSummaryRow label={locale.goods_with_total_price}>
            <PriceTag price={totalPrice} />
          </CartSummaryRow>
          <CartSummaryRow label={locale.delivery_cost}>
            <Typography variant="body2">{locale.delivery_cost_unknown}</Typography>
          </CartSummaryRow>
        </Box>
        <ToBePaidContainer mt="14px">
          <CartSummaryRow label={locale.to_be_paid}>
            <PriceTag price={totalPrice} />
          </CartSummaryRow>
        </ToBePaidContainer>
        <Box display="flex" mt="14px">
          <StyledConfirmButton variant="contained" onClick={onSubmitClick} disabled={disableSubmit}>{locale.confirm_order}</StyledConfirmButton>
        </Box>
      </CartSummaryContent>
    </CartSummaryBackground>)
}

export default CartSummary;