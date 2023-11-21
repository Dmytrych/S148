import {StyledStack} from "@/components/Cart/CartDisplay/components/BuyWithTotal/BuyWithTotal.styles";
import {locale} from "@/locale/ua";
import {StyledButton} from "@/components/Cart/CartDisplay/CartDisplay.styles";

export function BuyWithTotal() {
  return (
    <StyledStack direction="row">
      <StyledButton variant="contained">{locale.buy}</StyledButton>
    </StyledStack>
  )
}