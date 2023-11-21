import { useContext } from 'react'
import { CartContext, type ICartContext } from '@/contexts/CartStateContext'

export interface IAddToCartParams {
  productId: number
  quantity: number
  append?: boolean
}

export function useCart () {
  const { cart, setCart } = useContext<ICartContext>(CartContext)

  const addToCart = ({ productId, quantity, append }: IAddToCartParams) => {
    if (quantity && quantity <= 0) {
      throw new Error('Quantity should be positive')
    }

    const existingItem = cart.find((item) => item.productId === productId)

    if (!existingItem) {
      setCart((cart) => [...cart, { productId, quantity }])
      return
    }

    if (append) {
      existingItem.quantity += quantity
    } else {
      existingItem.quantity = quantity
    }

    setCart((cart) => {
      return [...cart]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart((cart) => {
      return cart.filter((item) => item.productId !== productId)
    })
  }

  const batchRemoveFromCart = (productIds: number[]) => {
    setCart((cart) => {
      return cart.filter((item) => productIds.includes(item.productId))
    })
  }

  const clearCart = () => {
    setCart(() => [])
  }

  return { cart, addToCart, removeFromCart, batchRemoveFromCart, clearCart }
}
