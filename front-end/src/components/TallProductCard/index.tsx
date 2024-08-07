import {Box, Button, Paper, styled, Typography, Link, Stack} from '@mui/material';
import NextLink from "next/link";
import {PriceTag} from "@/components/PriceTag";
import {locale} from "@/locale/ua";
import {getProductRoute} from "@/helpers/links";
import {Product} from "@/api/DTO/products";
import ProductImage from '@/components/ProductImage/ProductImage';
import {getProductAvailabilityString} from "@/helpers/product/get-product-availability-string";
import {getProductTitleImageUrl} from "@/helpers/product/get-product-title-image-url";

const LongButton = styled(Button)({
  width: "100%"
});

const StyledPaper = styled(Paper)(({theme}) => ({
  overflow: "hidden",
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

const StyledDescriptionTypography = styled(Typography)({
  height: '3.5rem',
  '-webkit-box-orient': 'vertical',
  display: '-webkit-box',
  overflow: 'hidden !important',
  textOverflow: 'ellipsis',
  '-webkit-line-clamp': "3"
})

interface IProps {
  product: Product;
  onBuyClick?: () => void;
}

function TallProductCard({product, onBuyClick}: IProps) {
  const availability = getProductAvailabilityString(product.attributes.inStock);
  const productLink = getProductRoute(product.id.toString());

  return (
    <StyledPaper elevation={4} square>
      <ProductContent gap={2}>
        <Link href={productLink} component={NextLink}>
          <ImageContainer>
            <ProductImage imageUrl={getProductTitleImageUrl(product.attributes)} sx={{height: "100%", width: "100%"}} alt={product.attributes.name}/>
          </ImageContainer>
        </Link>
        <Stack direction="column" flex="1">
          <Link href={productLink} component={NextLink}>
            <Typography variant="body1" fontWeight="500" fontSize='1.1rem' >
              {product.attributes.name}
            </Typography>
          </Link>
          <ProductPriceBox>
            <PriceTag price={product.attributes.price}/>
          </ProductPriceBox>
          <StyledDescriptionTypography variant="body2">
            {product.attributes.shortDescription}
          </StyledDescriptionTypography>
          <Stack direction="column" flex="1" justifyContent="flex-end">
            <Box>
              <Typography color={theme => theme.palette.text.secondary} variant="body2">{availability}</Typography>
            </Box>
            <Box>
              <LongButton variant="contained" color="primary" onClick={onBuyClick}>{locale.buy}</LongButton>
            </Box>
          </Stack>
        </Stack>
      </ProductContent>
    </StyledPaper>
  );
}

export default TallProductCard;