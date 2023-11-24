import {Formik} from "formik";
import {Box, Grid} from "@mui/material";
import {CartSummary} from "@/components/Forms/CheckoutForm/components/CartSummary";
import React from "react";
import {PageContainer} from "@/PageContent/Checkout/Checkout.styles";
import {IOrderFormFields, useOrderForm} from "@/PageContent/Checkout/hooks/useOrderForm";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import OrderForm from "@/components/Forms/CheckoutForm/components/OrderForm";

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