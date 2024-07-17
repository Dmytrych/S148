import { CartItemsEditingList } from "./components/CartItemsEditingList";
import {CartMargins} from "@/page-content/Cart/Cart.styles";

export function Cart() {
  return (
    <CartMargins>
      <CartItemsEditingList/>
    </CartMargins>
  )
}