import {Box} from '@mui/material';
import {MainTitle} from "@/PageContent/Home/components/MainTitle";
import {ProductsSlider} from "@/PageContent/Home/components/ProductsSlider";
import {useProducts} from "@/hooks/useProducts";
import {ContentLoader} from "@/components/ContentLoader/image";
import {PictureWithTextBlock} from "@/PageContent/Home/components/PictureWithTextBlock";
import {useHomePageInfo} from "@/hooks/useHomePageInfo";

export function Home() {
  const { data: products } = useProducts();

  const { data: pageData } = useHomePageInfo();

  console.log(pageData);

  return (
    <Box>
      <MainTitle />
      <ContentLoader isLoading={!products?.data.length}>
        <ProductsSlider products={products?.data ?? []}/>
      </ContentLoader>
      <ContentLoader isLoading={!pageData?.data.attributes.blocks}>
        { pageData?.data?.attributes?.blocks?.length
          ? <PictureWithTextBlock block={pageData.data.attributes.blocks[0]}/>
          : null}
      </ContentLoader>
    </Box>
  );
}