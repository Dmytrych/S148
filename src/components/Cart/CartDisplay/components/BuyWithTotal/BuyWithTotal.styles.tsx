import {alpha, Stack, styled} from "@mui/material";

export const StyledStack = styled(Stack)(({theme}) => ({
  border: `1px solid ${theme.palette.primary[theme.palette.mode]}`,
  borderRadius: "4px",
  padding: theme.spacing(3, 3),
  backgroundColor: alpha(theme.palette.primary[theme.palette.mode], 0.3),
}))