import {Box, Stack, Typography} from "@mui/material";
import {Product} from "@/api/DTO/products";
import {ContentLoader} from "@/components/ContentLoader/image";
import NextImage from "@/components/ProductCard/NextImage";
import {StyledStack} from "@/components/ProductCard/ProductCard.styles";

interface Props {
  product: Product;
}

export function ProductCard({product}: Props) {
  return (
    <StyledStack>
      <ContentLoader isLoading={!product}>
        { product && product.attributes.images?.data[0].attributes ? (
          <>
            <Box height="400px" width="300px">
              <NextImage media={product.attributes.images?.data[0].attributes} />
            </Box>
            <Typography variant="navbarLink" textAlign="center">{product.attributes.name}</Typography>
          </>
        ) : null }
      </ContentLoader>
    </StyledStack>
  )
}