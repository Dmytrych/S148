import {Box, CircularProgress, styled} from "@mui/material";
import Image from "next/image";
import {getImageUrl} from "@/helpers/imageUrl";
import {ApiImage} from "@/api/DTO/common/images";
import {ContentLoader} from "@/components/ContentLoader/image";

interface Props {
  image?: ApiImage;
  width?: string;
  height?: string;
  className?: string;
}

const ProductImage = ({ width, height, className, image }: Props) => {
  return (<Box className={className} width={width ?? "96px"} height={height ?? "96px"} position="relative">
    <ContentLoader isLoading={!image}>
      { image ? (
          <StyledImage
              src={getImageUrl(image.attributes.url)}
              alt="Product Image"
              fill
              placeholder={"blur"}
              blurDataURL={getImageUrl(image.attributes.formats.thumbnail.url)}
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