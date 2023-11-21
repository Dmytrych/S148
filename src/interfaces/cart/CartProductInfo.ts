import { type ICartSelection } from '@/contexts/CartContext'
import { type Product } from '@/api/DTO/products'

export interface CartProductInfo extends ICartSelection {
  product: Product
}
