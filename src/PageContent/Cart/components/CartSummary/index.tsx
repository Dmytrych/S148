import React, {useMemo} from 'react'
import {locale} from '@/locale/ua';
import {Box, styled, Typography} from "@mui/material";
import {ICartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";
import {Color} from "@/constants/color";
import {ActionButton} from "@/components/Buttons/ActionButton";
import {PriceTag, Size} from "@/components/PriceTag";

interface ICartSummaryProps {
    cartProducts: ICartItemsWithProductInfo[];
    disableSubmit: boolean;
    onSubmitClick: () => Promise<void> | void;
    onRemoveProductClick: (product: ICartItemsWithProductInfo) => Promise<void> | void;
}

function CartSummary({ cartProducts, disableSubmit, onSubmitClick}: ICartSummaryProps) {
    const totalPrice = useMemo(() =>
        cartProducts.reduce((acc, cartProduct) => acc + (cartProduct.product.price.base * cartProduct.quantity), 0),
        [cartProducts])

    return (
        <CartSummaryBackground>
            <CartSummaryContent>
                <Box>
                    <Typography variant="h5">{locale.total}</Typography>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box>
                        <Typography>{locale.to_be_paid}</Typography>
                    </Box>
                    <Box>
                        <PriceTag value={totalPrice} size={Size.Big}/>
                    </Box>
                </Box>
                <Box display="flex">
                    <StyledConfirmButton variant="contained">{locale.confirm_order}</StyledConfirmButton>
                </Box>
            </CartSummaryContent>
        </CartSummaryBackground>)
}

export default CartSummary;

const StyledConfirmButton = styled(ActionButton)({
    height: "50px",
    flexGrow: 1,
})

const CartSummaryBackground = styled(Box)({
    backgroundColor: Color.GlobalBlack10,
    border: `1px solid ${Color.GlobalBlack20}`,
    borderRadius: "5px"
});

const CartSummaryContent = styled(Box)({
    margin: "16px"
});