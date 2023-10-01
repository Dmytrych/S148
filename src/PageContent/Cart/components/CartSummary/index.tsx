import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import React from 'react'
import RoundedButton from '../../../../components/RoundedButton';
import { locale } from '@/locale/ua';
import {Box, Typography} from "@mui/material";
import {ICartProduct} from "@/contexts/CartContext";

interface ICartSummaryProps {
    cartProducts: ICartProduct[];
    disableSubmit: boolean;
    onSubmitClick: () => Promise<void> | void;
    onRemoveProductClick: (product: ICartProduct) => Promise<void> | void;
}

function CartSummary({ cartProducts, disableSubmit, onSubmitClick, onRemoveProductClick}: ICartSummaryProps) {

    return (
        <div>
            <Typography variant="h6">{locale.total}</Typography>
            <Box>
                {cartProducts.map((cartProduct, index) => {
                    return <div key={index}>
                        <div>
                            <DeleteOutlineOutlinedIcon color='error' onClick={() => onRemoveProductClick(cartProduct)}/>
                        </div>
                        <div>
                            {cartProduct.quantity}
                        </div>
                        <div>
                            {cartProduct.quantity}₴
                        </div>
                    </div>
                })}
            </Box>
            <div>
                <div>
                    {locale.to_be_paid}
                </div>
                {/*<div>*/}
                {/*    {cartProducts.reduce((acc, cartProduct) => acc + (cartProduct.product.unitPrice * cartProduct.quantity), 0)}₴*/}
                {/*</div>*/}
            </div>
            <div className='order-confirm-button'>
                <RoundedButton text={locale.confirm_order} size='medium' disabled={disableSubmit} onClick={onSubmitClick} />
            </div>
        </div>)
}

export default CartSummary;