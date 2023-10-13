import {Box, styled} from "@mui/material";
import {config} from "../../config";
import Image from "next/image";

interface Props {
  imageName: string;
  width?: number;
  height?: number;
}

const ImageBox = ({ imageName }: Props) => {
  return (<Box maxWidth="100px" maxHeight="96px">
    <StyledImage
      src={`${config.imageProviderUrl}/${imageName}`}
      alt="No Alt"
      width={500}
      height={500}
    />
  </Box>)
}

export default ImageBox;

const StyledImage = styled(Image)({
  height: "100%",
  width: "100%",
  backgroundColor: "white",
  objectFit: "cover"
})