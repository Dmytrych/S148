import {Box, styled} from '@mui/material';
import {MainTitle} from "@/PageContent/Home/components/MainTitle";
import {ProductsSlider} from "@/PageContent/Home/components/ProductsSlider";
import {useProducts} from "@/hooks/useProducts";
import {ContentLoader} from "@/components/ContentLoader/image";
import {useHomePageInfo} from "@/hooks/useHomePageInfo";
import {Color} from "@/constants/color";

export function Home() {
  const { data: products } = useProducts();

  const { data: pageData } = useHomePageInfo();

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
