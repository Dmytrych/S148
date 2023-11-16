import {Box} from "@mui/material";
import {CartProductInfo} from "@/interfaces/cart/CartProductInfo";
import {CartDisplayItem} from "@/components/Cart/CartDisplay/components/CartDisplayItem";

interface IProps {
    products: CartProductInfo[];
    onQuantityChange: (productCode: string, quantity: number) => void;
}

export function CartDisplay({products, onQuantityChange}: IProps) {
    return (<Box display="flex" flexDirection="column">
        {products.map((product, index) => (
            <CartDisplayItem key={index} cartProductInfo={product} onQuantityChange={onQuantityChange}/>
        ))}
    </Box>)
}