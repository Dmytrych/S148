import {Box, Button, Paper, styled, Typography} from '@mui/material';
import Link from "next/link";
import {PriceTag} from "@/components/PriceTag";
import {locale} from "@/locale/ua";
import Markdown from "react-markdown";
import {getProductRoute} from "@/helpers/links";
import {Product} from "@/api/DTO/products";
import ProductImage from '@/components/ProductImage/ProductImage';
import {getProductAvailabilityString} from "@/helpers/product/get-product-availability-string";

interface IProps {
    product: Product;
    onBuyClick?: () => void;
}

function TallProductCard({product, onBuyClick}: IProps) {
  const availability = getProductAvailabilityString(product.attributes.inStock);

  return (
    <Container elevation={4} square>
      <ProductContent>
        {product.attributes.images?.data[0] ? (
          <ImageContainer>
            <ProductImage imageUrl={product.attributes.images?.data[0].attributes.url} sx={{ height: "100%", width: "100%" }} />
          </ImageContainer>
        ) : null}
        <Box display="flex" flexDirection="column" flex="1">
          <ProductText>
            <Link href={getProductRoute(product.id.toString())}>
              {product.attributes.name}
            </Link>
          </ProductText>
          <ProductPriceBox>
            <PriceTag price={product.attributes.price} />
          </ProductPriceBox>
          <Box flex="1">
            <StyledMarkdown>
              {product.attributes.shortDescription}
            </StyledMarkdown>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="flex-end">
            <Box display="flex">
              <Typography color={theme => theme.palette.text.secondary} variant="body2">{availability}</Typography>
            </Box>
            <Box display="flex">
              <LongButton variant="contained" color="primary" onClick={onBuyClick}>{locale.buy}</LongButton>
            </Box>
          </Box>
        </Box>
      </ProductContent>
    </Container>
  );
}

export default TallProductCard;

const StyledMarkdown = styled(Markdown)({
  whiteSpace: "pre-wrap",
  wordBreak: "break-all"
})

const LongButton = styled(Button)({
  width: "100%"
});

const Container = styled(Paper)(({theme}) => ({
  height: '500px',
  width: '100%',
  padding: '16px 16px 24px 16px',
  border: `1px solid ${theme.palette.border.main}`
}));

const ProductContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: "100%",
  height: "100%"
});

const ImageContainer = styled(Box)({
  width: "100%",
  height: "50%",
  backgroundColor: "white",
});

const ProductText = styled(Typography)({
  display: 'block',
  overflow: 'hidden',
  wordBreak: 'break-all',
  textOverflow: 'ellipsis',
  margin: '10px 10px 0px 5px',
});

const ProductPriceBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
