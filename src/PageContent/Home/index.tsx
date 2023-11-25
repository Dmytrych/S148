import {Box, styled, Typography} from '@mui/material';
import Image from "next/image";
import {mainPageGradient} from "@/constants/gradients";
import {Color} from "@/constants/color";
import bottles from './bottles.png';
import {locale} from "@/locale/ua";
import RoundedButton from "@/components/RoundedButton";
import {bodyHeight} from "@/constants/size";
import {Font} from "@/constants/fonts";

const instagramUrl = 'https://www.instagram.com/s148_engineering/';

export default function Home() {
  const instagramRedirect = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <MainFrame>
      <TitlePage>
        <MainPageTitleText>
          <GiantTitleText>{locale.universal_oil}</GiantTitleText>
          <MainPageTitleDescription>
            {locale.universal_oil_detailed}
          </MainPageTitleDescription>
          <BuyButton>
            <RoundedButton
              text={locale.buy}
              //onClick={instagramRedirect}
            />
          </BuyButton>
          <SloganContainer>{locale.slogan}</SloganContainer>
        </MainPageTitleText>
        <Box display="flex" alignItems="center">
          <ScratchImageContainer>
            <Image src={bottles} alt="loading"/>
          </ScratchImageContainer>
        </Box>
      </TitlePage>
    </MainFrame>
  );
}

const SloganContainer = styled("div")({
  color: Color.UnimportantSubtextColor,
  fontSize: "1rem",
})

const BuyButton = styled("div")({
  fontSize: "1.5rem",
})

const MainPageTitleDescription = styled(Typography)({
  fontSize: "30px",
  fontFamily: Font.SquaresBold,
})

const MainPageTitleText = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "min-content",
  fontSize: "5rem",
  gap: "50px"
})

const ScratchImageContainer = styled('div')({
  display: "block",
  left: "500px",
  height: "600px"
})

const TitlePage = styled('div')({
  display: "flex",
  justifyContent: "center",
  height: bodyHeight,
  background: mainPageGradient,
  gap: "50px"
});

const GiantTitleText = styled(Typography)({
  textShadow: '0px 4px 10px var(--title-text-shadow-color)',
  width: 'min-content',
  fontSize: '5rem',
  fontFamily: Font.SquaresBold,
});

const MainFrame = styled('div')({
  fontFamily: 'var(--main-page-font-family)',
  minHeight: bodyHeight,
});
