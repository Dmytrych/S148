import {
  Box, Button, styled,
} from '@mui/material';
import {useMemo} from 'react';
import { WholeWindowBlock } from '../../components/WholeWindowBlock/WholeWindowBlock';
import ImageBox from '../../components/ImageBox';
import PriceTag from '../../components/PriceTag';
import { locale } from '@/locale/ua';
import PlusMinusControl from '../../components/PlusMinusControl';
import { ProductName } from '@/components/ProductName';
import {IProduct} from "@/api/DTO/products";
import {useProductCartControls} from "@/hooks/useProductCartControls";
import {redirect} from "next/navigation";

interface IProductDetailsParams {
  product: IProduct;
}

const ProductDetails = ({ product }: IProductDetailsParams) => {
  const { quantity, setQuantity, addToCart} = useProductCartControls(product);

  const totalPrice = useMemo(() => {
    return quantity * product.price.base;
  }, [product, quantity]);

  function handleInstantBuy() {
    addToCart();
    redirect('/cart');
  }

  function handleAddToCart() {
    addToCart();
  }

  return (
    <WholeWindowBlock>
      <Gradient>
        <PageContent>
          <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '20px',
              }}
          >
            <ImageBlock>
              <ProductImage>
                <ImageBox imageName={product.options.image} />
              </ProductImage>
            </ImageBlock>
            <div style={{ flex: 2 }}>
              <ProductTitleBlock>
                <ProductName value={product.name} size={"medium"} />
                <Box sx={{ lineHeight: '2' }}>
                  Add subtitle
                </Box>
              </ProductTitleBlock>
              <DescriptionBox>
                <PriceTagContainer>
                  <PriceTag value={totalPrice} />
                </PriceTagContainer>
                <Box>
                  <div>{locale.quantity}:</div>
                  <PlusMinusControl
                      onChange={setQuantity}
                      defaultValue={quantity}
                  />
                </Box>
                <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '20px',
                      marginTop: '10px',
                    }}
                >
                  <BuyButton
                      variant="contained"
                      size="large"
                      onClick={handleInstantBuy}
                  >
                    {locale.buy}
                  </BuyButton>
                  <BuyButton
                      variant="contained"
                      size="large"
                      onClick={handleAddToCart}
                  >
                    {locale.add_to_cart}
                  </BuyButton>
                </Box>
              </DescriptionBox>
            </div>
            <div style={{ flex: 1 }}>asdasdasd</div>
          </div>
        </PageContent>
      </Gradient>
    </WholeWindowBlock>
  );
};

export default ProductDetails;

const ImageBlock = styled('div')({
  flex: 2,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
});

const ProductImage = styled('div')({
  width: '400px',
  height: '400px',
});

const PriceTagContainer = styled('div')({
  backgroundColor: 'var(--global-color-secondary)',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  maxWidth: '200px',
  borderRadius: '10px',
  height: '70px',
});

const BuyButton = styled(Button)({
  ':hover': {
    backgroundColor: 'green',
  },
  backgroundColor: 'rgb(35, 189, 40)',
});

const DescriptionBox = styled('div')({
  margin: '10px 20px',
});

const ProductTitleBlock = styled('div')({
  margin: '30px 0px 30px 30px',
});

const Gradient = styled('div')({
  height: '100%',
  background: 'var(--main-page-gradient)',
});

const PageContent = styled('div')({
  display: 'flex',
  margin: '0px 10vw 20px 10vw',
  backgroundColor: 'white',
  borderRadius: '10px',
  flexDirection: 'column',
});
