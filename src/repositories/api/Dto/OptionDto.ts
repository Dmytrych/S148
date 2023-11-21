export enum OptionType {
  Image = 'image',
  Text = 'text',
}

export interface OptionDto<TVariant> {
  name: string
  mandatory: boolean
  type: OptionType
  variants: TVariant[]
}

export type TextOptionDto = OptionDto<TextOptionVariant>

export type ImageOptionDto = OptionDto<ImageOptionVariant>

interface OptionVariant {
  name: string
  isDefault: boolean
  price: number
}

export type ProductOptionVariant = TextOptionVariant | ImageOptionVariant

export type TextOptionVariant = OptionVariant

export type ImageOptionVariant = OptionVariant & {
  image: string
}
