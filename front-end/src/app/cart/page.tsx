import {Cart} from "@/page-content/Cart";
import {Metadata} from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/cart"
  },
  robots: "noindex,nofollow",
}

export default function CartPage() {
  return (<Cart />)
}