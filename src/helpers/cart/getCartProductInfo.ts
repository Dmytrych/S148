import { type ICartSelection } from '@/contexts/CartContext'
import { type Product } from '@/api/DTO/products'
import { type CartProductInfo } from '@/interfaces/cart/CartProductInfo'

interface GetCartProductInfosResult {
  converted: CartProductInfo[]
  notFoundIds: number[]
}

export function getCartProductInfos (cartItems: ICartSelection[], products: Product[]): GetCartProductInfosResult {
  const converted: CartProductInfo[] = []
  const notFoundIds: number[] = []

  cartItems.forEach((cartItem) => {
    const info = getCartProductInfo(cartItem, products)
    if (info) {
      converted.push(info)
    } else {
      notFoundIds.push(cartItem.productId)
    }
  })

  return { converted, notFoundIds }
}

export function getCartProductInfo (cartItem: ICartSelection, products: Product[]): CartProductInfo | undefined {
  const foundProduct = products.find((product) => product.id === cartItem.productId)

  if (!foundProduct) {
    return undefined
  }

  return {
    ...cartItem,
    product: foundProduct
  }
}
