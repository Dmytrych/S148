import {Button, styled} from "@mui/material";

export const StyledButton = styled(Button)(({theme}) => ({
  [theme.breakpoints.up("sm")]: {
    width: "164px"
  },
}))