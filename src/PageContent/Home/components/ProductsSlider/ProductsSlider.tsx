import {ItemCarousel} from "@/components/ItemCarousel";
import {Product} from "@/api/DTO/products";
import {Box, Stack} from "@mui/material";
import ProductImage from "@/components/ProductImage/ProductImage";
import {ProductCard} from "@/components/ProductCard";

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
            <ProductCard product={product}/>
          </Stack>
        ))
      }
    </ItemCarousel>
  );
}