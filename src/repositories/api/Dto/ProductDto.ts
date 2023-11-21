import { type ImageOptionDto, type TextOptionDto } from './OptionDto'

export type ProductOptionDto = TextOptionDto | ImageOptionDto

export interface ProductDto {
  id: number
  name: string
  subtitle: string
  imageName: string
  unitPrice: number
  options: ProductOptionDto[]
}
