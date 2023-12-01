import {ItemCarousel} from "@/components/ItemCarousel";
import {Product} from "@/api/DTO/products";
import {Box, Stack} from "@mui/material";
import ProductImage from "@/components/ProductImage/ProductImage";

interface Props {
  products: Product[];
}

export function ProductsSlider({ products }: Props) {
  console.log(products);
  return (
    <ItemCarousel>
      {
        products.map((product) => (
          <Stack key={product.id} justifyContent="center" alignItems="center">
            <Box height="100px">
              <ProductImage imageUrl={product.attributes.images?.data[0].attributes.url} sx={{ width: "100px", height: "100px" }}/>
            </Box>
          </Stack>
        ))
      }
    </ItemCarousel>
  );
}