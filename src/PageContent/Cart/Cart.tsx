import {Formik} from 'formik';
import {Box, Grid} from '@mui/material';
import {IOrderFormFields, useOrderForm} from "@/PageContent/Cart/hooks/useOrderForm";
import CartSummary from "@/PageContent/Cart/components/CartSummary";
import OrderForm from "@/PageContent/Cart/components/OrderForm";
import React from "react";
import {CartDisplay} from "@/components/CartDisplay";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import {PageContainer} from "@/PageContent/Cart/Cart.styles";

interface ICartProps {
  cartProducts: CartProductInfo[];
  onRemoveProduct: (productCode: string) => void;
  onQuantityChange: (productCode: string, quantity: number) => void;
  onSubmit: (values: IOrderFormFields) => Promise<void> | void;
}

export function Cart({cartProducts, onRemoveProduct, onSubmit, onQuantityChange}: ICartProps) {
  const {validateForm, getInitialValues} = useOrderForm();

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
          >
            {(props) => (
              <Box display="flex" flexGrow="1">
                <Grid container>
                  <Grid item md={8} xs={12}>
                    <Box p="16px">
                      <CartDisplay products={cartProducts} onQuantityChange={onQuantityChange} />
                    </Box>
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
          </Formik>
        )}
      </Box>
    </PageContainer>
  );
}
