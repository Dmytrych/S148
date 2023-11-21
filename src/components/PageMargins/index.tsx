import {Box, styled} from "@mui/material";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export function PageMargins({ children }: Props) {
    return (
        <AdaptiveMarginsLayout>
            {children}
        </AdaptiveMarginsLayout>
    )
}

const AdaptiveMarginsLayout = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        margin: theme.spacing(2, 2, 0, 2),
    },
    [theme.breakpoints.up('md')]: {
        margin: theme.spacing(2, 10, 0, 10),
    },
    [theme.breakpoints.up('lg')]: {
        margin: theme.spacing(2, 25, 0, 25),
    },
}));