import {Box, Button, Stack, Typography} from "@mui/material";
import {Product} from "@/api/DTO/products";
import {ContentLoader} from "@/components/ContentLoader/image";
import NextImage from "@/components/ProductCard/NextImage";
import {StyledStack} from "@/components/ProductCard/ProductCard.styles";
import {locale} from "@/constants/locale/ua";
import Link from "next/link";
import {Routes} from "@/routes";

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
            <Stack direction="row" justifyContent="center" sx={{ width: "100%", my: 2 }}>
              <Box>
                <Link href={Routes.Products}>
                  <Button variant="contained" color="primary" sx={{ width: "100px" }}>{locale.buy}</Button>
                </Link>
              </Box>
            </Stack>
          </>
        ) : null }
      </ContentLoader>
    </StyledStack>
  )
}