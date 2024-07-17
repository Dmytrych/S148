import {Box, styled} from "@mui/material";
import {Color} from "@/constants/color";

export const StyledBackground = styled(Box)(({theme}) => ({
  backgroundColor: Color.GlobalBlack10,
  padding: theme.spacing(3, 0)
}))