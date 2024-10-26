import {Box, keyframes, styled} from "@mui/material";

const fluidAnimation = keyframes`
  0%,100% {
    clip-path: polygon(0 93%, 8% 89%, 21% 89%, 32% 91%, 44% 93%, 53% 90%, 64% 88%, 76% 89%, 86% 92%, 97% 92%, 100% 91%, 100% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0 90%, 9% 92%, 19% 95%, 31% 95%, 42% 88%, 54% 86%, 63% 92%, 76% 94%, 87% 94%, 97% 92%, 100% 91%, 100% 0%, 0% 0%);
  }
`;


export const StyledBox = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "200px",
  backgroundColor: theme.palette.fluid_text.main,
  animation: `${fluidAnimation} 2s ease-in-out infinite`,
  "& span": {
    color: theme.palette.fluid_text.contrastText,
  }
}))

export const StyledImageBox = styled(Box)(({theme}) => ({
  maxHeight: "100%",
  width: "auto",
  position: "relative",
  margin: "0px 30px 0px 30px",
  "& img": {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  }
}))