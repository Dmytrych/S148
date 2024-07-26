import {StyledStack} from "@/components/cart/BuyWithTotal/BuyWithTotal.styles";
import {locale} from "@/locale/ua";
import {StyledButton} from "@/components/cart/CartDisplay/CartDisplay.styles";
import {PriceTag} from "@/components/PriceTag";

interface Props {
  totalPrice: number;
  onBuyClick: () => void;
}

const BuyWithTotal = ({totalPrice, onBuyClick}: Props) => {
  return (
    <StyledStack direction="row" spacing={2}>
      <PriceTag price={totalPrice} />
      <StyledButton onClick={onBuyClick} variant="contained">{locale.buy}</StyledButton>
    </StyledStack>
  )
}

export default BuyWithTotal;