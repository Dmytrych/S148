import CartDisplay from "@/components/cart/CartDisplay";
import {Box, Divider, Paper, Typography} from "@mui/material";
import {locale} from "@/locale/ua";

const CartItemsEditingList = () => {
  return (
    <Paper elevation={4}>
      <Box px={3} pb={1} pt={2}>
        <Typography variant="h4">{locale.cart_page}</Typography>
      </Box>
      <Divider orientation="horizontal" />
      <Box px={3} pb={5} pt={3}>
        <CartDisplay />
      </Box>
    </Paper>
  )
}

export default CartItemsEditingList