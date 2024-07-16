import { CartItemsEditingList } from "./components/CartItemsEditingList";
import {CartMargins} from "@/PageContent/Cart/Cart.styles";

export function Cart() {
  return (
    <CartMargins>
      <CartItemsEditingList/>
    </CartMargins>
  )
}