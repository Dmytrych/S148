import {Checkout} from "@/page-content/Checkout";
import {Metadata} from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/checkout"
  },
  robots: "noindex,nofollow",
}

export default function CheckoutPage() {
  return (
    <Checkout />
  )
}