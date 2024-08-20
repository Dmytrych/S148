import {Product} from "@/api/DTO/products";
import {getProductRoute} from "@/helpers/links";
import {useRouter} from "next/navigation";
import {useProducts} from "@/hooks/useProducts";
import { ContentLoader } from "@/components/ContentLoader/image";
import {Grid} from "@mui/material";
import TallProductCard from "@/components/TallProductCard";

const ProductsGrid = () => {
  const { data: productData, isLoading: productsLoading} = useProducts();
  const { push } = useRouter();

  const handleBuyClick = async (product: Product) => {
    await push(getProductRoute(product.id.toString()))
  }

  return (
    <ContentLoader isLoading={productsLoading}>
      <Grid container spacing={3}>
        {productData ? productData.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <TallProductCard
              product={product}
              onBuyClick={() => handleBuyClick(product)}
            />
          </Grid>
        )) : null}
      </Grid>
    </ContentLoader>
  )
}

export default ProductsGrid;