import {Box, Button, Paper, styled, Typography, Link} from '@mui/material';
import NextLink from "next/link";
import {PriceTag} from "@/components/PriceTag";
import {locale} from "@/locale/ua";
import Markdown from "react-markdown";
import {getProductRoute} from "@/helpers/links";
import {Product} from "@/api/DTO/products";
import ProductImage from '@/components/ProductImage/ProductImage';
import {getProductAvailabilityString} from "@/helpers/product/get-product-availability-string";
import {getProductTitleImageUrl} from "@/helpers/product/get-product-title-image-url";

const StyledMarkdown = styled(Markdown)({
  whiteSpace: "pre-wrap",
  wordBreak: "break-all"
})

const LongButton = styled(Button)({
  width: "100%"
});

const StyledPaper = styled(Paper)(({theme}) => ({
  height: '500px',
  width: '300px',
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
  height: "250px",
  backgroundColor: "white",
});

const ProductPriceBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

interface IProps {
  product: Product;
  onBuyClick?: () => void;
}

function TallProductCard({product, onBuyClick}: IProps) {
  const availability = getProductAvailabilityString(product.attributes.inStock);
  const productLink = getProductRoute(product.id.toString());

  return (
    <StyledPaper elevation={4} square>
      <ProductContent gap={1}>
        <Link href={productLink} component={NextLink}>
          <ImageContainer>
            <ProductImage imageUrl={getProductTitleImageUrl(product.attributes)} sx={{height: "100%", width: "100%"}} alt={product.attributes.name}/>
          </ImageContainer>
        </Link>
        <Box display="flex" flexDirection="column" flex="1">
          <Link href={productLink} component={NextLink}>
            {product.attributes.name}
          </Link>
          <ProductPriceBox>
            <PriceTag price={product.attributes.price}/>
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
    </StyledPaper>
  );
}

export default TallProductCard;