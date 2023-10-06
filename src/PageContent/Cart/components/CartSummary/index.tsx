import React, {useMemo} from 'react'
import {locale} from '@/locale/ua';
import {Box, styled, Typography} from "@mui/material";
import {ICartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";
import {ActionButton} from "@/components/Buttons/ActionButton";
import {PriceTag, Size} from "@/components/PriceTag";
import {CartSummaryRow} from "@/PageContent/Cart/components/CartSummary/components/CartSummaryRow";

interface ICartSummaryProps {
    cartProducts: ICartItemsWithProductInfo[];
    disableSubmit: boolean;
    onSubmitClick: () => Promise<void> | void;
}

function CartSummary({ cartProducts, disableSubmit, onSubmitClick}: ICartSummaryProps) {
    const totalPrice = useMemo(() =>
        cartProducts.reduce((acc, cartProduct) => acc + (cartProduct.product.price.base * cartProduct.quantity), 0).toString(),
        [cartProducts])

    return (
        <CartSummaryBackground>
            <CartSummaryContent>
                <Box>
                    <Typography variant="h4">{locale.total}</Typography>
                </Box>
                <Box display="flex" mt="14px" flexDirection="column">
                    <CartSummaryRow label={locale.goods_with_total_price}>
                        <PriceTag value={totalPrice} size={Size.Small} currencySize={Size.Small}/>
                    </CartSummaryRow>
                    <CartSummaryRow label={locale.delivery_cost}>
                        <Typography variant="body2">{locale.delivery_cost_unknown}</Typography>
                    </CartSummaryRow>
                </Box>
                <ToBePaidContainer mt="14px">
                    <CartSummaryRow label={locale.to_be_paid}>
                        <PriceTag value={totalPrice} size={Size.Medium} currencySize={Size.Medium}/>
                    </CartSummaryRow>
                </ToBePaidContainer>
                <Box display="flex" mt="14px">
                    <StyledConfirmButton variant="contained" onClick={onSubmitClick} disabled={disableSubmit}>{locale.confirm_order}</StyledConfirmButton>
                </Box>
            </CartSummaryContent>
        </CartSummaryBackground>)
}

export default CartSummary;

const ToBePaidContainer = styled(Box)(({ theme}) => ({
    borderTop: `1px solid ${theme.palette.border.main}`,
    borderBottom: `1px solid ${theme.palette.border.main}`,
    padding: "14px 0px 14px 0px",
}));

const StyledConfirmButton = styled(ActionButton)({
    height: "50px",
    flexGrow: 1,
});

const CartSummaryBackground = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.cardBackground.main,
    border: `1px solid ${theme.palette.border.main}`,
    borderRadius: "5px"
}));

const CartSummaryContent = styled(Box)({
    margin: "16px"
});