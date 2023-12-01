import {Box, Button, Stack} from "@mui/material";
import {locale} from "@/locale/ua";
import ScratchMarkLogo from "../../../../../public/images/scratchMark.svg";
import {
  GiantTitleText,
  MainPageTitleDescription,
  MainPageTitleText,
  ScratchImageContainer,
  SloganContainer,
  TitlePage
} from "./MainTitle.styles";
import {useIsMobile} from "@/hooks/useIsMobile";

export function MainTitle() {
  const isMobile = useIsMobile();

  return (
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
  )
}