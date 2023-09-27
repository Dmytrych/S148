import {
  Box,
  Button, styled,
} from '@mui/material';
import { WholeWindowBlock } from '../../components/WholeWindowBlock/WholeWindowBlock';
import {IProduct} from "@/api/DTO/products";
import {useProductCartControls} from "@/hooks/useProductCartControls";
import {redirect} from "next/navigation";
import {ProductDisplay} from "@/PageContent/ProductDetails/ProductDisplay";
import React from "react";

interface IProductDetailsParams {
  product: IProduct;
}

const ProductDetails = ({ product }: IProductDetailsParams) => {
  const { quantity, setQuantity, addToCart} = useProductCartControls(product);

  function handleInstantBuy() {
    addToCart();
    redirect('/cart');
  }

  function handleAddToCart() {
    addToCart();
  }

  return (
      <Box>
        <Box sx={{
          margin: "0px 90px"
        }}>
          <ProductDisplay
              product={product}
              handleInstantBuy={handleInstantBuy}
              handleAddToCart={handleAddToCart}
              quantity={quantity}
              onQuantityChange={setQuantity} />
        </Box>
      </Box>
  );
};

export default ProductDetails;