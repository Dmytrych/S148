import {Formik} from "formik";
import {Box, Grid} from "@mui/material";
import {CartSummary} from "../CartSummary";
import React from "react";
import {PageContainer} from "@/page-content/Checkout/Checkout.styles";
import {IOrderFormFields, useOrderForm} from "@/page-content/Checkout/hooks/useOrderForm";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import OrderForm from "../OrderForm";

interface ICartProps {
  cartProducts: CartProductInfo[];
  onSubmit: (values: IOrderFormFields) => Promise<void> | void;
}

export function CheckoutForm({cartProducts, onSubmit }: ICartProps) {
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
  )
}