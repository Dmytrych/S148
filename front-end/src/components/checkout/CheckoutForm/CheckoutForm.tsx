import {Formik} from "formik";
import {Box, Grid, Stack, styled, TextField, Typography} from "@mui/material";
import {CartSummary} from "../CartSummary";
import React from "react";
import {PageContainer} from "@/page-content/Checkout/Checkout.styles";
import {IOrderFormFields, useOrderForm} from "@/page-content/Checkout/hooks/useOrderForm";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import {locale} from "@/locale/ua";
import FormParagraphSign from "@/components/checkout/FormParagraphSign";
import {MuiTelInput} from "mui-tel-input";

const OrderPageContentInfoBlock = styled(Box)({
  padding: '20px 15px',
})

interface ICartProps {
  cartProducts: CartProductInfo[];
  onSubmit: (values: IOrderFormFields) => Promise<void> | void;
  isLoading: boolean;
}

export function CheckoutForm({ cartProducts, onSubmit, isLoading }: ICartProps) {
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
            {({
              touched,
              handleChange,
              errors,
              values,
              handleBlur,
              setFieldValue,
              setFieldTouched,
              handleSubmit,
              isValid}) => {
              const handleChangePhone = async (value: string) => {
                await setFieldValue('phoneNumber', value)
                await setFieldTouched('phoneNumber', true)
              }
              return (
                <Box display="flex" flexGrow="1" marginBottom={1}>
                  <Grid container>
                    <Grid item md={8} xs={12} spacing={2}>
                      <Stack spacing={2} >
                        <Box>
                          <Typography variant="h4">{locale.order_placement}</Typography>
                        </Box>
                        <Box>
                          <FormParagraphSign text={locale.contact_info} />
                          <OrderPageContentInfoBlock>
                            <Box sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "20px"
                            }}>
                              <TextField variant="outlined" onChange={handleChange} name="name"
                                label={locale.name} placeholder={locale.name_placeholder} value={values.name}
                                helperText={touched.name && errors.name} error={Boolean(touched.name && errors.name)} onBlur={handleBlur} />
                              <TextField variant="outlined" onChange={handleChange} name="surname"
                                label={locale.surname} placeholder={locale.surname_placeholder} value={values.surname}
                                helperText={touched.surname && errors.surname} error={Boolean(touched.surname && errors.surname)} onBlur={handleBlur} />
                              <MuiTelInput onlyCountries={["UA"]} defaultCountry="UA" value={values.phoneNumber} onChange={handleChangePhone} helperText={touched.phoneNumber && errors.phoneNumber}
                                error={Boolean(touched.phoneNumber && errors.phoneNumber)} onBlur={handleBlur} />
                            </Box>
                          </OrderPageContentInfoBlock>
                        </Box>
                        <Box>
                          <FormParagraphSign text={locale.delivery} />
                          <OrderPageContentInfoBlock>
                            <Box display="flex">
                              <TextField sx={{ flexGrow: 1 }} multiline minRows={3} variant="outlined" onChange={handleChange} name="description"
                                label={locale.delivery_info} placeholder={locale.delivery_info_placeholder} value={values.description}
                                helperText={touched.phoneNumber && errors.description} error={Boolean(touched.description && errors.description)} />
                            </Box>
                          </OrderPageContentInfoBlock>
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <CartSummary
                        onSubmitClick={handleSubmit}
                        disableSubmit={!isValid || isLoading}
                        cartProducts={cartProducts}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )
            }}
          </Formik>
        )}
      </Box>
    </PageContainer>
  )
}