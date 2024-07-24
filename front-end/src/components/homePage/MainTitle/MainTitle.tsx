import {
  TitleBlockContainer
} from "./MainTitle.styles";
import FluidAnimatedText from "@/components/homePage/FluidAnimatedText/FluidAnimatedText";
import {Typography} from "@mui/material";

interface Props {
  onBuyClick: () => void;
}

export function MainTitle({ onBuyClick }: Props) {

  return (
    <TitleBlockContainer>
      <FluidAnimatedText text="Засоби для догляду за зброЄю"/>
      <Typography variant="h5_squares">
        Засоби для догляду за зброЄю
      </Typography>
    </TitleBlockContainer>
  )
}