import {AppProps} from "next/app";
import {Layout} from "@/components/Layout/Layout";
import {createTheme, CssBaseline, ThemeOptions, ThemeProvider} from "@mui/material";
import {appTheme} from "@/theme/appTheme";
import {CartContextProvider} from "@/contexts/CartContextProvider";
import "../theme/fontImports.css"
let theme = createTheme(appTheme as ThemeOptions);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CartContextProvider>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CartContextProvider>
        </ThemeProvider>
    )
}