import {Box, Stack, Typography} from "@mui/material";
import {Product} from "@/api/DTO/products";
import {ContentLoader} from "@/components/ContentLoader/image";
import NextImage from "@/components/ProductCard/NextImage";

interface Props {
  product: Product;
}

export function ProductCard({product}: Props) {
  return (
    <Stack>
      <ContentLoader isLoading={!product}>
        { product ? (
          <>
            <Box height="400px">
              <NextImage media={product.attributes.images?.data[0].attributes} />
            </Box>
            <Typography variant="h6">asdasdasd</Typography>
          </>
        ) : null }
      </ContentLoader>
    </Stack>
  )
}