import {Box} from '@mui/material';
import {MainTitle} from "@/PageContent/Home/components/MainTitle";
import {ProductsSlider} from "@/PageContent/Home/components/ProductsSlider";
import {useProducts} from "@/hooks/useProducts";
import {ContentLoader} from "@/components/ContentLoader/image";
import {useHomePageInfo} from "@/hooks/useHomePageInfo";

export function Home() {
  const { data: products } = useProducts();

  const { data, isLoading } = useHomePageInfo();

  console.log(data);

  return (
    <Box>
      <MainTitle />
      <ContentLoader isLoading={!products?.data.length}>
        <ProductsSlider products={products?.data ?? []}/>
      </ContentLoader>
    </Box>
  );
}
