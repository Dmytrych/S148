import {Box, styled} from "@mui/material";
import Image from "next/image";
import {getImageUrl} from "@/helpers/imageUrl";

interface Props {
  imageName: string;
  width?: string;
  height?: string;
  className?: string;
}

const ImageBox = ({ imageName, width, height, className }: Props) => {
  return (<Box className={className} width={width ?? "96px"} height={height ?? "96px"} position="relative">
    <StyledImage
      src={getImageUrl(imageName)}
      alt="No Alt"
      fill
    />
  </Box>)
}

export default ImageBox;

const StyledImage = styled(Image)({
  backgroundColor: "white",
  objectFit: "contain"
})