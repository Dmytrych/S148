import {Box, styled} from "@mui/material";
import ProductImage from "@/components/ProductImage/ProductImage";

export const StyledProductImage = styled(ProductImage)(({theme}) => ({
  width: "100%",
  aspectRatio: "1 / 1"
}))