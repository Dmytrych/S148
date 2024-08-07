import {Box, styled, SxProps} from "@mui/material";
import Image from "next/image";
import ProductPlaceholderImage from "./product_image_placeholder.png";
import {getImageUrl} from "@/helpers/image-url";
import {SyntheticEvent, useEffect, useState} from "react";

interface Props {
  imageUrl?: string;
  className?: string;
  sx?: SxProps;
  priority?: boolean;
  alt: string;
}

const StyledImage = styled(Image)({
  backgroundColor: "white",
  objectFit: "contain"
})

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  "&> div": {
    position: "unset !important"
  },
  "&.image": {
    objectFit: "contain",
    width: "100% !important",
    position: "relative !important",
    height: "unset !important"
  }
})

const ProductImage = ({ className, imageUrl, sx, priority, alt }: Props) => {
  const [error, setError] = useState<
    SyntheticEvent<HTMLImageElement, Event> | null>();

  useEffect(() => {
    setError(null)
  }, [imageUrl])

  return (<Box className={className} sx={sx} position="relative">
    <ImageContainer>
      <StyledImage
        priority={priority}
        src={error ? ProductPlaceholderImage : getImageUrl(imageUrl)}
        alt={alt}
        onError={(err) => setError(err)}
        fill
        unoptimized
      />
    </ImageContainer>
  </Box>)
}

export default ProductImage;