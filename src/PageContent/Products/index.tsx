import {CircularProgress, styled} from '@mui/material';
import WholeWindowBlock from '../../components/WholeWindowBlock';
import TallProductCard from '../../components/TallProductCard';
import { useProducts } from '@/hooks/useProducts';

export default function Products() {
  const { data: products, isLoading: productsLoading} = useProducts();

  return (
        <WholeWindowBlock>
            <Gradient>
                <ProductPageBlock>
                    <ProductDisplay>
                        {
                            !productsLoading && products
                                ? products.map((product, index) => (
                                    <TallProductCard
                                        key={index}
                                        product={product}
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
