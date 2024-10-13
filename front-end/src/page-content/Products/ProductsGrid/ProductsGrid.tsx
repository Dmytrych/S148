"use client"

import {Product} from "@/api/DTO/products";
import {getProductRoute} from "@/helpers/links";
import {useRouter} from "next/navigation";
import {useProducts} from "@/hooks/useProducts";
import {Box, Grid2, Stack, styled} from "@mui/material";
import ProductListCard from "@/components/product/ProductListCard";
import {ContentLoader} from "@/components/ui/ContentLoader";

const ProductsGrid = () => {
  const { data: productData, isLoading: productsLoading} = useProducts();
  const { push } = useRouter();

  const handleBuyClick = async (product: Product) => {
    await push(getProductRoute(product.id.toString()))
  }

  return (
    <ContentLoader isLoading={productsLoading}>
      <Grid2 container spacing={4} columns={{ xs: 4, sm: 6, md: 8, xl: 10 }}>
        {productData ? productData.map((product, index) => (
          <Grid2 key={index} size={{ xs: 2 }}>
            <ProductListCard
              key={product.id}
              product={product}
              onBuyClick={() => handleBuyClick(product)}
            />
          </Grid2>
        )) : null}
      </Grid2>
    </ContentLoader>
  )
}

export default ProductsGrid;