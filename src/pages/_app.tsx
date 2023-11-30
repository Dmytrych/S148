import {AppProps} from "next/app";
import {Layout} from "@/components/Layout/Layout";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/theme/appTheme";
import "../theme/fontImports.css"
import {CartStateContextProvider} from "@/contexts/CartStateContextProvider";

export default function App({ Component, pageProps }: AppProps) {

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