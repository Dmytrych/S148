import { type CmsModel, type Metadata } from '@/api/DTO/common/common'
import { type ApiImage } from '@/api/DTO/common/images'

export interface IProductAttributes {
  code: string
  name: string
  price: number
  description?: string
  shortDescription?: string
  images?: {
    data: ApiImage[]
  }
  characteristics?: Characteristic[]
}

export interface Characteristic {
  name: string
  value: string
}

export interface Product extends CmsModel<IProductAttributes> {
}

export interface IProductApiResponse {
  data: Product[]
  meta: Metadata
}
