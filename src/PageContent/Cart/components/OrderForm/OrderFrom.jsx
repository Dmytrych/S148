import React from 'react'
import { locale } from '@/locale/ua';
import FormParagraphSign from '../FormParagraphSign';
import {Box, styled, TextField} from "@mui/material";

function OrderForm({ errors, touched, handleChange, values, handleSubmit }) {
    return (
        <>
            <Box><FormParagraphSign text={locale.contact_info} /></Box>
            <OrderPageContentInfoBlock>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    <TextField variant="outlined" onChange={handleChange} name="name"
                               label={locale.name} placeholder={locale.name_placeholder} value={values.name}
                               helperText={touched.phoneNumber && errors.name} error={touched.name && errors.name} />
                    <TextField variant="outlined" onChange={handleChange} name="middleName"
                               label={locale.middle_name} placeholder={locale.middle_name_placeholder} value={values.middleName}
                               helperText={touched.phoneNumber && errors.middleName} error={touched.middleName && errors.middleName} />
                    <TextField variant="outlined" onChange={handleChange} name="surname"
                               label={locale.surname} placeholder={locale.surname_placeholder} value={values.surname}
                               helperText={touched.phoneNumber && errors.surname} error={touched.surname && errors.surname} />
                    <TextField variant="outlined" onChange={handleChange} name="email"
                               label={locale.email} placeholder={locale.email_placeholder} value={values.email}
                               helperText={touched.phoneNumber && errors.email} error={touched.email && errors.email} />
                    <TextField variant="outlined" onChange={handleChange} name="phoneNumber"
                               label={locale.phone_number} placeholder={locale.phone_number_placeholder} value={values.phoneNumber}
                               helperText={touched.phoneNumber && errors.phoneNumber} error={touched.phoneNumber && errors.phoneNumber} />
                </Box>
            </OrderPageContentInfoBlock>
            <Box><FormParagraphSign text={locale.delivery} /></Box>
            <OrderPageContentInfoBlock>
                <Box display="flex">
                    <TextField sx={{ flexGrow: 1 }} multiline minRows={3} variant="outlined" onChange={handleChange} name="description"
                               label={locale.delivery_info} placeholder={locale.delivery_info_placeholder} value={values.description}
                               helperText={touched.phoneNumber && errors.description} error={touched.description && errors.description} />
                </Box>
            </OrderPageContentInfoBlock>
        </>
    )
}

export default OrderForm;

const OrderPageContentInfoBlock = styled(Box)({
    marginLeft: '2rem',
    padding: '20px 15px',
})