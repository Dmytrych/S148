import {AppProps} from "next/app";
import {Layout} from "@/components/Layout/Layout";
import "./index.css";
import "./colors.css";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {appTheme} from "@/theme/appTheme";
import {CartContextProvider} from "@/contexts/CartContextProvider";

const theme = createTheme(appTheme);

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