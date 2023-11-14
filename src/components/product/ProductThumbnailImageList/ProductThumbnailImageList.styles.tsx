import {Box, styled} from "@mui/material";
import ProductImage from "@/components/ProductImage/ProductImage";

export const ImageScroll = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    flexGrow: "1",
    overflowY: "scroll",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none"
    },
}))

export const HoverHighlightBox = styled(Box)({
    transition: "all 0.1s ease-in-out",
    "&:hover": {
        transform: "scale(1.1)"
    }
})

export const ThumbnailProductImage = styled(ProductImage)({
    height: "100px",
    width: "100%"
})