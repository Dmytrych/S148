import {Box, CircularProgress, styled} from "@mui/material";
import Image from "next/image";
import {getImageUrl} from "@/helpers/imageUrl";
import {ApiImage} from "@/api/DTO/common/images";
import {ContentLoader} from "@/components/ContentLoader/image";

interface Props {
  imageUrl: string;
  width?: string;
  height?: string;
  className?: string;
}

const ProductImage = ({ width, height, className, imageUrl }: Props) => {
  return (<Box className={className} width={width ?? "96px"} height={height ?? "96px"} position="relative">
    <ContentLoader isLoading={!imageUrl}>
      { imageUrl ? (
          <StyledImage
              src={getImageUrl(imageUrl)}
              alt="Product Image"
              fill
              unoptimized
          />
      ) : null }
    </ContentLoader>
  </Box>)
}

export default ProductImage;

const StyledImage = styled(Image)({
  backgroundColor: "white",
  objectFit: "contain"
})