import {Box, styled} from "@mui/material";
import ProductImage from "@/components/ProductImage/ProductImage";

export const ImageOutlinedBox = styled(Box)(({theme}) => ({
  width: "100%",
  border: `1px solid ${theme.palette.border.main}`,
  padding: theme.spacing(1)
}))

export const ImageScroll = styled(Box)(({theme}) => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  flexGrow: "1",
  overflowY: "scroll",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none"
  },
  gap: theme.spacing(1),
}))

export const ThumbnailProductImage = styled(ProductImage)(({theme}) => ({
  width: "100%",
  aspectRatio: "1 / 1",
  transition: "all 0.1s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)"
  }
}))