import {Box} from "@mui/material";
import {Product} from "@/api/DTO/products";
import {ProductPhotosDisplay} from "@/components/product/ProductPhotosDisplay";

interface ProductImageBlockProps {
    product: Product;
}

export function ProductImageBlock({ product }: ProductImageBlockProps) {
  return (
    <Box>
      {product?.attributes?.images?.data ? (
        <ProductPhotosDisplay productImages={product?.attributes?.images?.data} />
      ) : null}
    </Box>
  )
}