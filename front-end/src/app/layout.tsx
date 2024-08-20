import Layout from "@/components/Layout";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/theme/appTheme";
import "../theme/fontImports.css"
import {CartStateContextProvider} from "@/contexts/CartStateContextProvider";
import {Metadata} from "next";

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