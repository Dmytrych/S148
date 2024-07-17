import {styled} from "@mui/material";

export const StyledFooter = styled("footer")(({theme}) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
}))