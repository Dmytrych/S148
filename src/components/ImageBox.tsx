import {Box, styled} from "@mui/material";
import Image from "next/image";
import {getImageUrl} from "@/helpers/imageUrl";

interface Props {
  src: string;
  altText?: string;
  width?: string;
  height?: string;
  className?: string;
}

const ImageBox = ({ src, width, height, className, altText = "" }: Props) => {
  return (<Box className={className} width={width ?? "96px"} height={height ?? "96px"} position="relative">
    <StyledImage
      src={getImageUrl(src)}
      alt={altText}
      fill
    />
  </Box>)
}

export default ImageBox;

const StyledImage = styled(Image)({
  backgroundColor: "white",
  objectFit: "contain"
})