import {Product} from "@/api/DTO/products";
import {getProductRoute} from "@/helpers/links";
import {useRouter} from "next/router";
import {useProducts} from "@/hooks/useProducts";
import { ContentLoader } from "@/components/ContentLoader/image";
import {Grid, Stack} from "@mui/material";
import TallProductCard from "@/components/TallProductCard";

const ProductsGrid = () => {
  const { data: productData, isLoading: productsLoading} = useProducts();
  const { push } = useRouter();

  const handleBuyClick = async (product: Product) => {
    await push(getProductRoute(product.id.toString()))
  }

  return (
    <ContentLoader isLoading={productsLoading}>
      <Stack direction="row" flexWrap="wrap" gap={3}>
        {productData ? productData.map((product, index) => (
          <TallProductCard
            product={product}
            onBuyClick={() => handleBuyClick(product)}
          />
        )) : null}
      </Stack>
    </ContentLoader>
  )
}

export default ProductsGrid;