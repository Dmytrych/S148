import {AppProps} from "next/app";
import {Layout} from "@/components/Layout/Layout";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/theme/appTheme";
import "../theme/fontImports.css"
import {CartStateContextProvider} from "@/contexts/CartStateContextProvider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ThemeProvider theme={theme}>
        <CartStateContextProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartStateContextProvider>
      </ThemeProvider>
    </>
  )
}