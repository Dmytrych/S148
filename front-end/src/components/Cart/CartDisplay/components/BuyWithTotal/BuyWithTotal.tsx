import {StyledStack} from "@/components/Cart/CartDisplay/components/BuyWithTotal/BuyWithTotal.styles";
import {locale} from "@/locale/ua";
import {StyledButton} from "@/components/Cart/CartDisplay/CartDisplay.styles";
import {PriceTag} from "@/components/PriceTag";

interface Props {
  totalPrice: number;
  onBuyClick: () => void;
}

export function BuyWithTotal({totalPrice, onBuyClick}: Props) {
  return (
    <StyledStack direction="row" spacing={2}>
      <PriceTag price={totalPrice} />
      <StyledButton onClick={onBuyClick} variant="contained">{locale.buy}</StyledButton>
    </StyledStack>
  )
}