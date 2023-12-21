import {useProducts} from '@/hooks/useProducts';
import {PageMargins} from "@/components/PageMargins";
import {ProductsGrid} from "@/PageContent/Products/ProductsGrid";
import {ContentLoader} from "@/components/ContentLoader/image";
import {MainTitle} from "@/PageContent/Home/components/MainTitle";
import { Box } from '@mui/material';
import {useRef} from "react";

export default function ProductsPageContent() {
  const { data: productData, isLoading: productsLoading} = useProducts();
  const productsBlockRef = useRef<HTMLDivElement>(null)

  const executeScroll = () => productsBlockRef.current && productsBlockRef.current.scrollIntoView({behavior: 'smooth'})

  return (
    <Box>
      <MainTitle onBuyClick={executeScroll} />
      <PageMargins>
        <Box ref={productsBlockRef}/>
        <ContentLoader isLoading={productsLoading || !productData?.data}>
          <ProductsGrid products={productData?.data}/>
        </ContentLoader>
      </PageMargins>
    </Box>
  );
}
