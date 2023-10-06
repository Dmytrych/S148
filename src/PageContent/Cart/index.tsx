import {Formik} from 'formik';
import {Box, Grid, styled} from '@mui/material';
import {IOrderFormFields, useOrderForm} from "@/PageContent/Cart/hooks/useOrderForm";
import CartSummary from "@/PageContent/Cart/components/CartSummary";
import OrderForm from "@/PageContent/Cart/components/OrderForm";
import {ICartItemsWithProductInfo} from "@/hooks/products/useCartItemsWithProductInfo";
import React from "react";

interface ICartProps {
    cartProducts: ICartItemsWithProductInfo[];
    onRemoveProduct: (productCode: string) => void;
    onSubmit: (values: IOrderFormFields) => Promise<void> | void;
}

function Cart({cartProducts, onRemoveProduct, onSubmit}: ICartProps) {
    const {validateForm, getInitialValues} = useOrderForm();

    // const handleRemoveCartItem = (cartProduct: ICartProduct): void => {
    //     onRemoveProduct(cartProduct.productCode);
    // };

    return (
        <PageContainer sx={{ marginX: { lg: "200px", xs: "40px" } }}>
            <Box sx={{
                display: "flex",
                flexGrow: "1"
            }}>
                {cartProducts.length > 0 && (
                    <Formik
                        validateOnMount
                        initialValues={getInitialValues()}
                        validate={validateForm}
                        onSubmit={onSubmit}
                        children={(props) => (
                            <Box display="flex" flexGrow="1">
                                <Grid container>
                                    <Grid item md={8} xs={12}>
                                        <OrderForm errors={props.errors} values={props.values} touched={props.touched} handleChange={props.handleChange} />
                                    </Grid>
                                    <Grid item md={4} xs={12}>
                                        <CartSummary
                                            onSubmitClick={props.handleSubmit}
                                            disableSubmit={!props.isValid}
                                            cartProducts={cartProducts}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        )}
                    />
                )}
            </Box>
        </PageContainer>
    );
}

export default Cart;

const PageContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    paddingTop: "40px",
});
