import {useProducts} from '@/hooks/useProducts';
import {PageMargins} from "@/components/PageMargins";
import {ProductsGrid} from "@/PageContent/Products/ProductsGrid";
import {ContentLoader} from "@/components/ContentLoader/image";
import {MainTitle} from "@/PageContent/Home/components/MainTitle";
import { Box } from '@mui/material';

export default function ProductsPageContent() {
  const { data: productData, isLoading: productsLoading} = useProducts();

  return (
    <Box>
      <MainTitle />
      <PageMargins>
        <ContentLoader isLoading={productsLoading || !productData?.data}>
          <ProductsGrid products={productData?.data}/>
        </ContentLoader>
      </PageMargins>
    </Box>
  );
}
