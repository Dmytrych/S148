import {Checkout} from "@/page-content/Checkout";
import {Metadata} from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/checkout"
  },
  robots: "noindex,follow",
}

export default function CheckoutPage() {
  return (
    <Checkout />
  )
}