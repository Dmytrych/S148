import {Form, Formik} from 'formik';
import {Box, Grid} from '@mui/material';
import {IOrderFormFields, useOrderForm} from "@/PageContent/Checkout/hooks/useOrderForm";
import React from "react";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import {PageContainer} from "@/PageContent/Checkout/Checkout.styles";
import OrderForm from "@/PageContent/Checkout/components/OrderForm";
import {CartSummary} from "@/PageContent/Checkout/components/CartSummary";

interface ICartProps {
  cartProducts: CartProductInfo[];
  onSubmit: (values: IOrderFormFields) => Promise<void> | void;
}

export function Checkout({cartProducts, onSubmit }: ICartProps) {
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
                    <OrderForm {...props} />
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
