import {ItemCarousel} from "@/components/ItemCarousel";
import {Product} from "@/api/DTO/products";
import {ProductCard} from "@/components/ProductCard";
import {Box, Paper } from "@mui/material";
import {StyledBackground} from "@/page-content/Home/components/ProductsSlider/ProductsSlider.styles";

interface Props {
  products: Product[];
}

export function ProductsSlider({ products }: Props) {
  return (
    <StyledBackground>
      <ItemCarousel>
        {
          products.map((product, index) => (
            <Box key={index} p={2}>
              <Paper elevation={5}>
                <ProductCard product={product}/>
              </Paper>
            </Box>
          ))
        }
      </ItemCarousel>
    </StyledBackground>
  );
}