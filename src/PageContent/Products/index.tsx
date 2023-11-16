import { useProducts } from '@/hooks/useProducts';
import {Product} from "@/api/DTO/products";
import {useRouter} from "next/router";
import {getProductPageRoute} from "@/helpers/links";
import {PageMargins} from "@/components/PageMargins";
import {ProductsGrid} from "@/PageContent/Products/ProductsGrid";
import {ContentLoader} from "@/components/ContentLoader/image";

export default function ProductsPageContent() {
  const { push } = useRouter();
  const { data: productData, isLoading: productsLoading} = useProducts();

  const handleAddToCart = async (product: Product) => {
    await push(getProductPageRoute(product.attributes.code))
  }

  console.log(productData, productsLoading);

  return (
        <PageMargins>
          <ContentLoader isLoading={productsLoading || !productData?.data}>
            <ProductsGrid products={productData?.data}/>
          </ContentLoader>
        </PageMargins>
  );
}
