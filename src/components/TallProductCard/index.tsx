import { styled } from '@mui/material';
import ImageBox from '../ImageBox';
import PriceTag from '../PriceTag';
import Link from "next/link";
import {IProduct} from "@/api/DTO/products";

function TallProductCard({ product }: { product: IProduct }) {
  return (
    <Container>
      <ImageContainer>
        <ImageBox imageName={product.options.image} />
      </ImageContainer>
      <div style={{ width: '100%' }}>
        <ProductText>
          <Link href={`/product/${product.code}`}>
            {product.name}
          </Link>
        </ProductText>
        <ProductPriceBox>
          <PriceTag value={product.price.base}></PriceTag>
          {/* <div style={{ marginRight: "10px" }}> */}
          {/* eslint-disable-next-line max-len */}
          {/*    <RoundedButton text={locale.buy} onClick={() => setProductQuantity(productQuantity + 1)}/> */}
          {/* </div> */}
        </ProductPriceBox>
      </div>
    </Container>
  );
}

export default TallProductCard;

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '80vh',
  width: '20rem',
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: 'var(--product-card-color)',
});

const ImageContainer = styled('div')({
  height: '50%',
  width: '100%',
  backgroundColor: 'white',
});

const ProductText = styled('span')({
  display: 'block',
  overflow: 'hidden',
  wordBreak: 'break-all',
  textOverflow: 'ellipsis',
  margin: '10px 10px 0px 20px',
});

const ProductPriceBox = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
