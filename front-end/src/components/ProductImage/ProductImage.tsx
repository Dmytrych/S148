import {Box, styled, SxProps} from "@mui/material";
import Image from "next/image";
import {getImageUrl} from "@/helpers/image-url";
import {ContentLoader} from "@/components/ContentLoader/image";

interface Props {
  imageUrl?: string;
  className?: string;
  sx?: SxProps;
  priority?: boolean;
}

const ProductImage = ({ className, imageUrl, sx, priority }: Props) => {
  return (<Box className={className} sx={sx} position="relative">
    <ContentLoader isLoading={!imageUrl}>
      { imageUrl ? (
        <ImageContainer>
          <StyledImage
            priority={priority}
            src={getImageUrl(imageUrl)}
            alt="Product Image"
            fill
            unoptimized
          />
        </ImageContainer>
      ) : null }
    </ContentLoader>
  </Box>)
}

export default ProductImage;

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