import Layout from "@/components/Layout";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/theme/appTheme";
import "../theme/fontImports.css"
import {CartStateContextProvider} from "@/contexts/CartStateContextProvider";
import {Metadata, Viewport} from "next";
import Script from "next/script";
import "react-image-gallery/styles/css/image-gallery.css"
import {getProductTitleImageUrl} from "@/helpers/product/get-product-title-image-url";
import {locale} from "@/locale/ua";

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export const metadata: Metadata = {
  // TODO: Add keyword meta tag
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_HOST_NAME}`),
  title: locale.home_page_title,
  applicationName: "S148 Engineering Shop",
  description: locale.home_page_description,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: locale.home_page_title,
    description: locale.home_page_description,
    images: ['/images/S148.png'],
  },
  manifest: "/manifest.json"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TYBM8XHFER`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-TYBM8XHFER');
                `,
          }}
        />
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