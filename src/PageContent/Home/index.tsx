import {Box} from '@mui/material';
import {MainTitle} from "@/PageContent/Home/components/MainTitle";
import {ProductsSlider} from "@/PageContent/Home/components/ProductsSlider";
import {useProducts} from "@/hooks/useProducts";
import {ContentLoader} from "@/components/ContentLoader/image";

export function Home() {
  const { data: products } = useProducts();

  return (
    <Box>
      <MainTitle />
      <ContentLoader isLoading={!products?.data.length}>
        <ProductsSlider products={products?.data ?? []}/>
      </ContentLoader>
    </Box>
  );
}
