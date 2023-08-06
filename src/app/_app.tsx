import {AppProps} from "next/app";
import {Layout} from "@/components/Layout/Layout";

export function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}