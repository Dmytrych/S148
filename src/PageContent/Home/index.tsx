import {Box, Button, Stack, styled, Typography} from '@mui/material';
import {Color} from "@/constants/color";
import {locale} from "@/locale/ua";
import ScratchMarkLogo from '../../../public/images/scratchMark.svg';
import {bodyHeight} from "@/constants/size";
import {Font} from "@/constants/fonts";
import Image from "next/image";
import {useIsMobile} from "@/hooks/useIsMobile";

const instagramUrl = 'https://www.instagram.com/s148_engineering/';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <Box>
      <TitlePage>
        <Stack flex="1" px={{ xs: 3, sm: 10, md: 20 }}>
          <MainPageTitleText width="100%" height="100%">
            <GiantTitleText variant="h1">{locale.universal_oil}</GiantTitleText>
            <MainPageTitleDescription variant="h2">
              {locale.universal_oil_detailed}
            </MainPageTitleDescription>
            <Box>
              <Button variant="contained" color="primary" sx={{width: "300px", height: "40px"}}>{locale.buy}</Button>
            </Box>
            <SloganContainer>{locale.slogan}</SloganContainer>
          </MainPageTitleText>
        </Stack>
        { !isMobile ? (
          <ScratchImageContainer>
            <ScratchMarkLogo height="100%" />
          </ScratchImageContainer>
        ) : null }
      </TitlePage>
    </Box>
  );
}

const SloganContainer = styled("div")({
  color: Color.UnimportantSubtextColor,
  fontSize: "1rem",
})

const MainPageTitleDescription = styled(Typography)({
  fontFamily: Font.SquaresBold,
})

const MainPageTitleText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 30
})

const ScratchImageContainer = styled(Box)(({theme}) => ({
  position: "absolute",
  height: bodyHeight,
  zIndex: '-1',
  color: theme.palette.other.black20
}))

const TitlePage = styled('div')({
  display: "flex",
  justifyContent: "center",
  height: bodyHeight
});

const GiantTitleText = styled(Typography)({
  width: 'min-content',
  fontFamily: Font.SquaresBold,
});
