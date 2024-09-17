import {Cart} from "@/page-content/Cart";
import {Metadata} from "next";
import {locale} from "@/locale/ua";

export const metadata: Metadata = {
  title: locale.cart_title,
  alternates: {
    canonical: "/cart"
  },
  robots: "noindex,follow",
}

export default function CartPage() {
  return (<Cart />)
}