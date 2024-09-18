'use client'

import {Box, Breadcrumbs, Link, Paper, Stack} from '@mui/material';
import {Product} from "@/api/DTO/products";
import {useProductCartControls} from "@/hooks/useProductCartControls";
import React from "react";
import {Routes} from "@/routes";
import {useRouter} from "next/navigation";
import {ProductInfoTabs} from "@/page-content/ProductDetails/components/ProductInfoTabs";
import {PageMargins} from "@/components/PageMargins";
import {ProductDescription} from './components/ProductDescription/ProductDescription';
import {ProductImageBlock} from "@/page-content/ProductDetails/components/ProductDisplay";
import {locale} from "@/locale/ua";
import {getProductRoute} from "@/helpers/links";

interface IProductDetailsParams {
    product: Product;
}

export function ProductDetailsPageContent({product}: IProductDetailsParams) {
  const { push } = useRouter();
  const { addToCart } = useProductCartControls(product);

  async function handleInstantBuy() {
    addToCart();
    await push(Routes.Cart);
  }

  function handleAddToCart() {
    addToCart();
  }

  return (
    <PageMargins>
      <Breadcrumbs sx={{ mb: 1 }}>
        <Link underline="hover" key="1" color="inherit" href={Routes.Home}>
          {locale.home_page}
        </Link>
        <Link underline="hover" key="1" color="inherit" href={getProductRoute(product.id.toString())}>
          {product.attributes.name}
        </Link>
      </Breadcrumbs>
      <Stack direction="row" gap={1} flexWrap="wrap">
        <Box display="flex" justifyContent="center" flex={1}>
          <Box minWidth="300px"><ProductImageBlock product={product}/></Box>
        </Box>
        <Box flex={1}>
          <Paper elevation={3}>
            <Box sx={{ p: { xs: 2, sm: 3 } }}>
              <ProductDescription
                product={product}
                handleInstantBuy={handleInstantBuy}
                handleAddToCart={handleAddToCart}/>
              <Box mt={3}>
                <ProductInfoTabs product={product}/>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Stack>
    </PageMargins>
  );
}