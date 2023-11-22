import {Box} from "@mui/material";
import {Product} from "@/api/DTO/products";
import {ProductPhotosDisplay} from "@/components/product/ProductPhotosDisplay";

interface ProductImageBlockProps {
    product: Product;
    className?: string;
}

export function ProductImageBlock({ product, className }: ProductImageBlockProps) {
  return (
    <Box className={className}>
      {product?.attributes?.images?.data ? (
        <ProductPhotosDisplay productImages={product?.attributes?.images?.data} />
      ) : null}
    </Box>
  )
}