import {ICartSelection} from "@/contexts/CartContext";
import {IProduct} from "@/api/DTO/products";

export interface CartProduct extends ICartSelection, IProduct {}