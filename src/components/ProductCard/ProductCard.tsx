import {Box, Stack, Typography} from "@mui/material";
import {Product} from "@/api/DTO/products";
import {ContentLoader} from "@/components/ContentLoader/image";
import NextImage from "@/components/ProductCard/NextImage";

interface Props {
  product: Product;
}

export function ProductCard({product}: Props) {
  return (
    <Stack direction="column" minWidth="300px" justifyContent="start">
      <ContentLoader isLoading={!product}>
        { product && product.attributes.images?.data[0].attributes ? (
          <>
            <Box maxHeight="400px">
              <NextImage media={product.attributes.images?.data[0].attributes} />
            </Box>
            <Typography variant="navbarLink" textAlign="center">{product.attributes.name}</Typography>
          </>
        ) : null }
      </ContentLoader>
    </Stack>
  )
}