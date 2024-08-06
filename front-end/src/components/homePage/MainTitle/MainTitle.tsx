import {
  TitleBlockContainer
} from "./MainTitle.styles";
import FluidAnimatedText from "@/components/homePage/FluidAnimatedText/FluidAnimatedText";
import {Typography} from "@mui/material";

export function MainTitle() {

  return (
    <TitleBlockContainer>
      <FluidAnimatedText text="Засоби для догляду за зброєю"/>
      <Typography variant="h5_squares">
        Засоби для догляду за зброЄю
      </Typography>
    </TitleBlockContainer>
  )
}