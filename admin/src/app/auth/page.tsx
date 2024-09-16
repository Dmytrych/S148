'use client'

import {Formik, FormikHelpers} from "formik";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {locale} from "@/locale/ua";
import {getToken} from "@/api/login";
import {ApiRoutes} from "@/api/apiRoutes";
import {useState} from "react";

type LoginValues = {
  identifier: string;
  password: string;
}

const initialValues: LoginValues = {
  identifier: '',
  password: ''
}

const Page = () => {
  const [error, setError] = useState<string>();

  const handleSubmit = async (values: LoginValues, helpers: FormikHelpers<LoginValues>) => {
    try {
      const token = await getToken(ApiRoutes.loginUrl(), values)
      console.log(token)
    } catch (e) {
      setError("Unable to log you in")
    } finally {
      helpers.setSubmitting(false);
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {
        (props) => (
          <Stack alignItems="center">
            <Stack direction="column" width="300px" gap={2} mt={20}>
              <TextField variant="outlined" onChange={props.handleChange} name="identifier" type="email"
                label={locale.email} placeholder={locale.email_placeholder} value={props.values.identifier}
                helperText={props.touched.identifier && props.errors.identifier} error={Boolean(props.touched.identifier && props.errors.identifier)} onBlur={props.handleBlur} />
              <TextField variant="outlined" onChange={props.handleChange} name="password"
                label={locale.password} type="password" value={props.values.password}
                helperText={props.touched.password && props.errors.password} error={Boolean(props.touched.password && props.errors.password)} onBlur={props.handleBlur} />
              <Typography>{error}</Typography>
              <Button onClick={props.submitForm} >Submit</Button>
            </Stack>
          </Stack>
        )
      }
    </Formik>
  )
}

export default Page