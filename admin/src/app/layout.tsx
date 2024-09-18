import Layout from "@/components/Layout";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/theme/appTheme";
import {Metadata, Viewport} from "next";
import {locale} from "@/locale/ua";
import AuthContextProvider from "@/providers/auth";

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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: locale.home_page_title,
    description: locale.home_page_description,
    images: ['/images/S148.png'],
  },
  robots: "index, follow",
  manifest: "/manifest.json"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}