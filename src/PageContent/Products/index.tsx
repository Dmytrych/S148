import {CircularProgress, styled} from '@mui/material';
import WholeWindowBlock from '../../components/WholeWindowBlock';
import TallProductCard from '../../components/TallProductCard';
import { useProducts } from '@/hooks/useProducts';
import {IProduct} from "@/api/DTO/products";
import {useRouter} from "next/router";
import {getProductPageRoute} from "@/helpers/links";

export default function Products() {
  const { push } = useRouter();
  const { data: productData, isLoading: productsLoading} = useProducts();

  const handleAddToCart = async (product: IProduct) => {
    await push(getProductPageRoute(product.attributes.code))
  }

  return (
        <WholeWindowBlock>
            <Gradient>
                <ProductPageBlock>
                    <ProductDisplay>
                        {
                            !productsLoading && productData?.data
                                ? productData?.data.map((product, index) => (
                                    <TallProductCard
                                        key={index}
                                        product={product}
                                        onBuyClick={() => handleAddToCart(product)}
                                    />
                                )) : <CircularProgress />
                        }
                    </ProductDisplay>
                </ProductPageBlock>
            </Gradient>
        </WholeWindowBlock>
  );
}

const Gradient = styled('div')({
  height: '100%',
  background: 'var(--main-page-gradient)',
});

const ProductPageBlock = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ProductDisplay = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '70vw',
  marginTop: '20px',
});
