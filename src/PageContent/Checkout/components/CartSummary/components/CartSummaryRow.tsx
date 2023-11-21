import {Box, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/system";

interface IProps {
    children: React.ReactNode;
    label: string;
}

export function CartSummaryRow({children, label}: IProps) {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <CenteredBox>
                <Typography color={theme => theme.palette.text.secondary} variant="body2">{label}</Typography>
            </CenteredBox>
            <CenteredBox>
                {children}
            </CenteredBox>
        </Box>
    )
}

const CenteredBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
})