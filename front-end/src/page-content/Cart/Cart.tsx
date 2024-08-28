'use client'

import CartItemsEditingList from "./components/CartItemsEditingList";
import {Box, styled} from "@mui/material";

const CartMargins = styled(Box)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(2, 2, 0, 2),
  },
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(2, 10, 0, 10),
  },
  [theme.breakpoints.up('lg')]: {
    margin: theme.spacing(2, 40, 0, 40),
  },
}))

export function Cart() {
  return (
    <CartMargins>
      <CartItemsEditingList/>
    </CartMargins>
  )
}