import {Box, styled} from "@mui/material";
import ProductImage from "@/components/ProductImage/ProductImage";

export const ImageScroll = styled(Box)(({theme}) => ({
    overflowY: "scroll",
    height: "100%",
    width: "100px",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none"
    }
}))

export const StyledProductImage = styled(ProductImage)(({theme}) => ({
  width: "100%",
  aspectRatio: "1 / 1"
}))