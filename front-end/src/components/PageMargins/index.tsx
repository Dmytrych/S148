import {Box, BoxProps, styled} from "@mui/material";
import {ReactNode} from "react";

interface Props extends BoxProps {
    children: ReactNode;
}

export function PageMargins({ children, ...props }: Props) {
  return (
    <AdaptiveMarginsLayout {...props}>
      {children}
    </AdaptiveMarginsLayout>
  )
}

const AdaptiveMarginsLayout = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(2, 2, 2, 2),
  },
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(2, 10, 2, 10),
  },
  [theme.breakpoints.up('lg')]: {
    margin: theme.spacing(2, 25, 2, 25),
  },
}));