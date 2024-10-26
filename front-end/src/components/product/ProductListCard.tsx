import {
  Box,
  Typography,
  Link,
  Stack,
  CardContent,
  Card,
  IconButton
} from '@mui/material';
import NextLink from "next/link";
import {PriceTag} from "@/components/PriceTag";
import {locale} from "@/locale/ua";
import {getProductRoute} from "@/helpers/links";
import {Product} from "@/api/DTO/products";
import {getProductAvailabilityString} from "@/helpers/product/get-product-availability-string";
import {getOptimizedImageUrl} from "@/helpers/product/get-optimized-image-url";
import {Color} from "@/constants/color";
import ProductListCardImage from "@/components/product/ProductListCardImage";
import {useMemo} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

interface IProps {
  product: Product;
  onBuyClick?: () => void;
}

function ProductListCard({product, onBuyClick}: IProps) {
  const availability = getProductAvailabilityString(product.attributes.inStock);
  const productLink = getProductRoute(product.id.toString());

  const imageUrl = useMemo(() => {
    if (!product?.attributes?.titleImage?.data) {
      return;
    }

    return getOptimizedImageUrl(product?.attributes?.titleImage?.data, "small")
  }, [product]);

  return (
    <Card square elevation={0} sx={{display: "flex", flexDirection: "column", aspectRatio: "2 / 3"}}>
      <Box flex={3}>
        <ProductListCardImage imageUrl={imageUrl} alt={product.attributes.name}/>
      </Box>
      <CardContent sx={{ paddingX: 0, paddingY: 0.5 }}>
        <Stack ml={0} direction="column" flex="1">
          <Link href={productLink} component={NextLink}>
            <Typography variant="body1" fontWeight="500" fontSize='1.1rem'>
              {product.attributes.name}
            </Typography>
          </Link>
        </Stack>
      </CardContent>
      <Box flex={1} sx={{ flexDirection: "column" }}>
        <Box width="100%">
          <Typography display="inline-block" color={Color.GlobalBlack60} variant="body2">{availability}</Typography>
        </Box>
        <Stack display="flex" direction="row" justifyContent="space-between" width="100%">
          <Box>
            <PriceTag price={product.attributes.price}/>
          </Box>
          <IconButton onClick={onBuyClick} color="primary" aria-label={locale.buy} size="small">
            <ShoppingCartOutlinedIcon/>
          </IconButton>
        </Stack>
      </Box>
    </Card>
  );
}

export default ProductListCard;