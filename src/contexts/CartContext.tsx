import * as React from 'react';
import {IAddToCartParams} from "@/hooks/context/useCart";

export interface ICartSelection {
  productId: number;
  quantity: number;
}

export interface ICartContext {
  cart: ICartSelection[];
  addToCart: ({ productId, quantity, append }: IAddToCartParams) => void;
  removeFromCart: (productId: number) => void;
  batchRemoveFromCart: (productIds: number[]) => void;
  clearCart: () => void;
}

export const CartContext = React.createContext<ICartContext>({} as ICartContext);
