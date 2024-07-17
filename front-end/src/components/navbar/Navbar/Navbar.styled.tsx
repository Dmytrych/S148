import {AppBar, Box, styled} from "@mui/material";
import {Color} from "@/constants/color";
import {topBarHeight} from "@/constants/size";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: Color.NavbarBackgroundColor,
  position: 'sticky',
  height: topBarHeight,
  display: 'flex',
  justifyContent: 'center',
});

export const ItemMenu = styled(Box)(({theme}) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'end',
  flexGrow: '9',
  [theme.breakpoints.up("md")]: {
    paddingRight: "200px"
  }
}));