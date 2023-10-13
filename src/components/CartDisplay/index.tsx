import {Box} from "@mui/material";
import {CartProduct} from "@/interfaces/cart/CartProduct";
import {CartDisplayItem} from "@/components/CartDisplay/components/CartDisplayItem";

interface IProps {
  products: CartProduct[];
  onQuantityChange: (productCode: string, quantity: number) => void;
}

export function CartDisplay({products, onQuantityChange}: IProps) {
  return (<Box display="flex" flexDirection="column">
    {products.map((product, index) => (
      <CartDisplayItem key={index} product={product} onQuantityChange={onQuantityChange}/>
    ))}
  </Box>)
}