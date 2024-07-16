import {styled} from "@mui/material";
import Link from "next/link";

export const StyledLink = styled(Link)(({theme}) => ({
  textDecoration: "none",
  color: theme.palette.text.primary
}))