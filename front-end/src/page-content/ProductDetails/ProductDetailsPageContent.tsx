'use client'

import {Box, Grid} from '@mui/material';
import {Product} from "@/api/DTO/products";
import {useProductCartControls} from "@/hooks/useProductCartControls";
import React from "react";
import {Routes} from "@/routes";
import {useRouter} from "next/navigation";
import {ProductInfoTabs} from "@/page-content/ProductDetails/components/ProductInfoTabs";
import {PageMargins} from "@/components/PageMargins";
import {ProductDescription} from './components/ProductDescription/ProductDescription';
import {PaperStyled } from './ProductDetailsPageContent.styles';
import {ProductImageBlock} from "@/page-content/ProductDetails/components/ProductDisplay";

interface IProductDetailsParams {
    product: Product;
}

export function ProductDetailsPageContent({product}: IProductDetailsParams) {
  const { push } = useRouter();
  const {quantity, setQuantity, addToCart} = useProductCartControls(product);

  async function handleInstantBuy() {
    addToCart();
    await push(Routes.Cart);
  }

  function handleAddToCart() {
    addToCart();
  }

  return (
    <PageMargins>
      <Box display="flex">
        <Grid container spacing={{ sm: 1, md: 4 }}>
          <Grid item md={6} xs={12}>
            <Box>
              <ProductImageBlock product={product}/>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <PaperStyled elevation={3}>
              <Box paddingX={5} paddingY={3}>
                <ProductDescription
                  product={product}
                  handleInstantBuy={handleInstantBuy}
                  handleAddToCart={handleAddToCart}
                  quantity={quantity}
                  onQuantityChange={setQuantity}/>
                <Box mt={3}>
                  <ProductInfoTabs product={product}/>
                </Box>
              </Box>
            </PaperStyled>
          </Grid>
        </Grid>
      </Box>
    </PageMargins>
  );
}