import Layout from "@/components/Layout";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/theme/appTheme";
import "../theme/fontImports.css"
import {CartStateContextProvider} from "@/contexts/CartStateContextProvider";
import {Metadata} from "next";
import Script from "next/script";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: "/manifest.json"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_G_TAG}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_G_TAG}');
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CartStateContextProvider>
            <CssBaseline/>
            <Layout>
              {children}
            </Layout>
          </CartStateContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}