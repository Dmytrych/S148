import {Box, styled, Typography} from "@mui/material";
import {Color} from "@/constants/color";
import {Font} from "@/constants/fonts";
import {bodyHeight} from "@/constants/size";

export const SloganContainer = styled("div")({
  color: Color.UnimportantSubtextColor,
  fontSize: "1rem",
})

export const MainPageTitleDescription = styled(Typography)({
  fontFamily: Font.SquaresBold,
})

export const MainPageTitleText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 30
})

export const ScratchImageContainer = styled(Box)(({theme}) => ({
  position: "absolute",
  height: "70vh",
  zIndex: '-1',
  color: theme.palette.other.black20
}))

export const TitleBlockContainer = styled('div')({
  display: "flex",
  justifyContent: "center",
  height: "70vh"
});

export const GiantTitleText = styled(Typography)({
  width: 'min-content',
  fontFamily: Font.SquaresBold,
});