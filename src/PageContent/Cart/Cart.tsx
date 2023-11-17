import {PageMargins} from "@/components/PageMargins";
import { CartItemsEditingList } from "./components/CartItemsEditingList";

export function Cart() {
    return (
        <PageMargins>
          <CartItemsEditingList/>
        </PageMargins>
    )
}