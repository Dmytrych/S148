import {ICartSelection} from "@/contexts/CartContext";
import {Product} from "@/api/DTO/products";

export interface CartProductInfo extends ICartSelection {
  product: Product;
}