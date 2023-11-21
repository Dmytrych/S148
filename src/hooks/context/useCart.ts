import { CartContext, type ICartContext } from '@/contexts/CartContext'
import { useContext } from 'react'

export interface IAddToCartParams {
  productId: number
  quantity: number
  append?: boolean
}

export function useCartn () {
  return useContext<ICartContext>(CartContext)
}
