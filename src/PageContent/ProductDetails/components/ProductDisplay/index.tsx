import {Box} from "@mui/material";
import {IProduct} from "@/api/DTO/products";
import {ProductPhotosDisplay} from "../../../../components/product/ProductPhotosDisplay";

interface ProductImageBlockProps {
    product: IProduct;
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