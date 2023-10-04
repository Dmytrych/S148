import {Box, Typography} from "@mui/material";
import React from "react";
import {Color} from "@/constants/color";

interface IProps {
    children: React.ReactNode;
    label: string;
}

export function CartSummaryRow({children, label}: IProps) {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box>
                <Typography sx={{ fontSize: "15px", color: Color.GlobalBlack60 }}>{label}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                {children}
            </Box>
        </Box>
    )
}