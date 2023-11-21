import { type AppProps } from 'next/app'
import { Layout } from '@/components/Layout/Layout'
import { createTheme, CssBaseline, type ThemeOptions, ThemeProvider } from '@mui/material'
import { appTheme } from '@/theme/appTheme'
import '../theme/fontImports.css'
import { CartStateContextProvider } from '@/contexts/CartStateContextProvider'
const theme = createTheme(appTheme as ThemeOptions)

export default function App ({ Component, pageProps }: AppProps) {
  return (
        <ThemeProvider theme={theme}>
          <CartStateContextProvider>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartStateContextProvider>
        </ThemeProvider>
  )
}
