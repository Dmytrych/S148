import {ICartSelection} from "@/contexts/CartContext";
import {IProduct} from "@/api/DTO/products";

export interface CartProductInfo extends ICartSelection {
  product: IProduct;
}