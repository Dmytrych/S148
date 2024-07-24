import {Stack, Typography} from "@mui/material";
import Image from "next/image";
import {locale} from "@/locale/ua";

const EmptyCartState = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Image height={200} width={200} src="/images/empty-shopping-cart.svg" alt={"Empty shopping cart"}/>
      <Typography variant="h4">{locale.cart_empty}</Typography>
    </Stack>
  )
}

export default EmptyCartState;