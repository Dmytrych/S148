import {Product} from "@/api/DTO/products";
import {ICartSelection} from "@/contexts/CartStateContext";

export interface CartProductInfo extends ICartSelection {
  product: Product;
}