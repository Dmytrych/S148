import { styled } from "@mui/material";
import { appSettings } from "../../helpers/appSettings";
import {config} from "../../config";

const ImageBox = ({ imageName }) => {
    return (<Image src={`${config.imageProviderUrl}/${imageName}`} />)
}

export default ImageBox;

const Image = styled("img")({
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    objectFit: "cover"
})