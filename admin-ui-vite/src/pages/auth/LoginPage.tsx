import {Box, Button, Container, TextField} from "@mui/material";
import { locale } from "../../locale/ua";
import {SubmitHandler, useForm} from "react-hook-form";
import {useLogin} from "../../hooks/use-login.ts";
import {Navigate, useNavigate} from "react-router";
import {getArticlesRoute} from "../../utils/routes.ts";

type LoginValues = {
  identifier: string;
  password: string;
}

function LoginPage () {
  const navigate = useNavigate();
  const { user, handleLogin } = useLogin()
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

  if (user?.username) {
    return <Navigate replace to="/articles" />
  }

  return (
    <Container sx={{ pt: 10 }}>
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
    </Container>
  )
}

export default LoginPage
