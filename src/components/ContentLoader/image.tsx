import {ReactNode} from "react";
import {Box, CircularProgress} from "@mui/material";

interface Props {
    isLoading: boolean;
    children: ReactNode;
}

export function ContentLoader({ isLoading, children }: Props) {
  return (
    !isLoading ? (
      children
    ) : (
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    )
  )
}