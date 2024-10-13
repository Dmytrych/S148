import Image from "next/image";
import ProductPlaceholderImage from "./product_image_placeholder.png";
import {getImageUrl} from "@/helpers/image-url";
import {SyntheticEvent, useState} from "react";
import {Box, styled} from "@mui/material";

type Props = {
  imageUrl?: string;
  alt: string;
}

const StyledImage = styled(Image)({
  maxWidth: "100%",
  maxHeight: "100%",
})

const ImageContainer = styled(Box)({
  width: "100%",
  height: "100%",
  position: "relative"
})

const ProductListCardImage = ({ imageUrl, alt }: Props) => {
  const [error, setError] = useState<SyntheticEvent<HTMLImageElement, Event> | null>(null);

  const image = error ? ProductPlaceholderImage : getImageUrl(imageUrl);
  return (
    <ImageContainer>
      <StyledImage
        priority
        src={image}
        alt={alt}
        onError={setError}
        fill
        style={{
          objectFit: "contain"
        }}
      />
    </ImageContainer>
  )
}

export default ProductListCardImage