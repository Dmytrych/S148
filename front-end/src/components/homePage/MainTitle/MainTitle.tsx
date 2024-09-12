import {
  TitleBlockContainer
} from "./MainTitle.styles";
import FluidAnimatedText from "@/components/homePage/FluidAnimatedText/FluidAnimatedText";
import {Box, Stack, Typography} from "@mui/material";

export function MainTitle() {

  return (
    <TitleBlockContainer>
      <FluidAnimatedText/>
      <Typography variant="h5_squares" textAlign="center">
            Засоби для догляду за зброЄю
      </Typography>
    </TitleBlockContainer>
  )
}