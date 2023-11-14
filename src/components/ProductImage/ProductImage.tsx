import {Box, CircularProgress, styled} from "@mui/material";
import Image from "next/image";
import {getImageUrl} from "@/helpers/imageUrl";
import {ApiImage} from "@/api/DTO/common/images";
import {ContentLoader} from "@/components/ContentLoader/image";

interface Props {
  imageUrl: string;
  className?: string;
}

const ProductImage = ({ className, imageUrl }: Props) => {
  return (<Box className={className} position="relative">
    <ContentLoader isLoading={!imageUrl}>
      { imageUrl ? (
          <StyledImage
              src={getImageUrl(imageUrl)}
              alt="Product Image"
              objectFit="cover"
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