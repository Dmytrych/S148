import * as React from 'react'
import { type Dispatch, type SetStateAction } from 'react'

export interface ICartSelection {
  productId: number
  quantity: number
}

export interface ICartContext {
  cart: ICartSelection[]
  setCart: Dispatch<SetStateAction<ICartSelection[]>>
}

export const CartContext = React.createContext<ICartContext>({} as ICartContext)
