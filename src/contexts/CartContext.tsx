import * as React from 'react';
import {IAddToCartParams} from "@/hooks/context/useCart";

export interface ICartProduct {
  productCode: string;
  quantity: number;
}

export interface ICartContext {
  cart: ICartProduct[];
  addToCart: ({ productCode, quantity, append }: IAddToCartParams) => void;
  removeFromCart: (productCode: string) => void;
  clearCart: () => void;
}

export const CartContext = React.createContext<ICartContext>({} as ICartContext);
