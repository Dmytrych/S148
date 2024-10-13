import {ReactNode} from "react";
import {Box, BoxProps, CircularProgress} from "@mui/material";

type Props = BoxProps & {
    isLoading: boolean;
    children: ReactNode;
}

export function ContentLoader({ isLoading, children, ...props }: Props) {
  return (
    !isLoading ? (
      children
    ) : (
      <Box width="100%" height="100%" display="flex" justifyContent="center" {...props}>
        <CircularProgress />
      </Box>
    )
  )
}