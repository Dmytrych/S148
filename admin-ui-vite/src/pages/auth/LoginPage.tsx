import {Box, Button, TextField} from "@mui/material";
import { locale } from "../../locale/ua";
import {SubmitHandler, useForm} from "react-hook-form";
import {useLogin} from "../../hooks/use-login.ts";
import {useNavigate} from "react-router";
import {getArticlesRoute} from "../../utils/routes.ts";

type LoginValues = {
  identifier: string;
  password: string;
}

function LoginPage () {
  const navigate = useNavigate();
  const { handleLogin } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginValues>();

  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    await handleLogin(data.identifier, data.password)
      .then(() => {
        navigate(getArticlesRoute())
      })
      .catch(() => {
        setError('password', { type: 'manual', message: 'Invalid email or password' })
      });
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto' }}
    >
      <TextField
        label="Email"
        type="email"
        {...register('identifier', { required: 'Email is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' } })}
        placeholder={locale.email_placeholder}
        error={!!errors.identifier}
        helperText={errors.identifier?.message}
      />
      <TextField
        label="Password"
        type="password"
        {...register('password', { required: 'Password is required' })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  )
  // return (
  //   <form>
  //     <Stack alignItems="center">
  //       <Stack direction="column" width="300px" gap={2} mt={20}>
  //         <TextField variant="outlined" placeholder={locale.email_placeholder} {...register("identifier")}/>
  //         <TextField variant="outlined" onChange={props.handleChange} name="identifier" type="email"
  //                    label={locale.email} placeholder={locale.email_placeholder} value={props.values.identifier}
  //                    helperText={props.touched.identifier && props.errors.identifier} error={Boolean(props.touched.identifier && props.errors.identifier)} onBlur={props.handleBlur} />
  //         <TextField variant="outlined" onChange={props.handleChange} name="password"
  //                    label={locale.password} type="password" value={props.values.password}
  //                    helperText={props.touched.password && props.errors.password} error={Boolean(props.touched.password && props.errors.password)} onBlur={props.handleBlur} />
  //         <Typography>{error}</Typography>
  //         <Button onClick={props.submitForm} >Submit</Button>
  //       </Stack>
  //     </Stack>
  //   </form>
  // )

}

export default LoginPage
