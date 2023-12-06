import {Box, styled} from "@mui/material";
import Image from "../../../public/images/S148.png";

export const StyledStack = styled(Box)({
  flexDirection: "column",
  minWidth: "300px",
  justifyContent: "start",
  alignItems: "center",
  display: "flex",
  "&:hover": {
    backgroundImage: `url(${Image.src})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }
})