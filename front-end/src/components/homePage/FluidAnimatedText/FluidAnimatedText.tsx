import Image from "next/image";
import {StyledBox, StyledImageBox} from "@/components/homePage/FluidAnimatedText/FluidAnimatedText.styled";
import s148EngineeringWithLogoImage from "../../../../public/images/s148-engineering-with-logo.png";

const FluidAnimatedText = () => {
  return (<StyledBox>
    <StyledImageBox>
      <Image
        src={s148EngineeringWithLogoImage}
        alt="Product Image"
        unoptimized
      />
    </StyledImageBox>
  </StyledBox>);
}

export default FluidAnimatedText;