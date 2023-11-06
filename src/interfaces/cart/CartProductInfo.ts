import {ICartSelection} from "@/contexts/CartContext";
import {IProductAttributes} from "@/api/DTO/products";

export interface CartProductInfo extends ICartSelection {
  product: IProductAttributes;
}