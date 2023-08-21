import * as React from 'react';
import { ProductOptionDto } from '../repositories/api/Dto/ProductDto';
import { ProductOptionVariant } from '../repositories/api/Dto/OptionDto';

export type CartProduct = {
  productId: number;
  selectedOptions: OptionSelection[];
  quantity: number;
};

export type OptionSelection = {
  option: ProductOptionDto;
  selectedVariant: ProductOptionVariant;
};

export const CartContext = React.createContext({
  cart: [] as CartProduct[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  saveCart: (state: CartProduct[]) => {
  },
});
