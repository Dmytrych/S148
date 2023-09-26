import * as React from 'react';
import {Dispatch, SetStateAction} from "react";

export interface ICartProduct {
  productCode: string;
  quantity: number;
}

export interface ICartContext {
  cart: ICartProduct[];
  saveCart: Dispatch<SetStateAction<ICartProduct[]>>;
}

export const CartContext = React.createContext<ICartContext>({} as ICartContext);
