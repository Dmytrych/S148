import { Box, Divider, Paper, Stack } from '@mui/material'
import { type CartProductInfo } from '@/interfaces/cart/CartProductInfo'
import { CartDisplayItem } from '@/components/Cart/CartDisplay/components/CartDisplayItem'
import { BuyWithTotal } from '@/components/Cart/CartDisplay/components/BuyWithTotal/BuyWithTotal'

interface IProps {
  products: CartProductInfo[]
  onQuantityChange: (productId: number, quantity: number) => void
}

export function CartDisplay ({ products, onQuantityChange }: IProps) {
  return (<Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
          {products.map((product, index) => (
            <CartDisplayItem key={index} cartProductInfo={product} onQuantityChange={onQuantityChange}/>
          ))}
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <BuyWithTotal/>
        </Box>
    </Stack>)
}
