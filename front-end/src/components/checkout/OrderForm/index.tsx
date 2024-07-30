import React, {ChangeEvent} from 'react'
import { locale } from '@/locale/ua';
import FormParagraphSign from '../FormParagraphSign';
import {Box, Stack, styled, TextField, Typography} from "@mui/material";
import {FormikErrors, FormikProps, FormikTouched} from "formik";
import {IOrderFormFields} from "@/page-content/Checkout/hooks/useOrderForm";

interface IProps extends FormikProps<IOrderFormFields>{
    errors: FormikErrors<IOrderFormFields>;
    touched: FormikTouched<IOrderFormFields>;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    values: IOrderFormFields
}

function OrderForm({ errors, touched, handleChange, values, handleBlur }: IProps) {
  return (
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
            <TextField variant="outlined" onChange={handleChange} name="email"
              label={locale.email} placeholder={locale.email_placeholder} value={values.email}
              helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} onBlur={handleBlur} />
            <TextField variant="outlined" onChange={handleChange} name="phoneNumber"
              label={locale.phone_number} placeholder={locale.phone_number_placeholder} value={values.phoneNumber}
              helperText={touched.phoneNumber && errors.phoneNumber} error={Boolean(touched.phoneNumber && errors.phoneNumber)} onBlur={handleBlur} />
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
  )
}

export default OrderForm;

const OrderPageContentInfoBlock = styled(Box)({
  padding: '20px 15px',
})