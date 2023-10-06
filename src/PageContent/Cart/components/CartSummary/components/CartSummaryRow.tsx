import {Box, Typography} from "@mui/material";
import React from "react";
import {Color} from "@/constants/color";
import {styled} from "@mui/system";

interface IProps {
    children: React.ReactNode;
    label: string;
}

export function CartSummaryRow({children, label}: IProps) {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <CenteredBox>
                <Typography sx={{ fontSize: "15px", color: Color.GlobalBlack60 }}>{label}</Typography>
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