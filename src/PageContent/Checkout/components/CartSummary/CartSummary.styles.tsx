import {Box, styled} from "@mui/material";
import {ActionButton} from "@/components/Buttons/ActionButton";

export const ToBePaidContainer = styled(Box)(({ theme}) => ({
    borderTop: `1px solid ${theme.palette.border.main}`,
    borderBottom: `1px solid ${theme.palette.border.main}`,
    padding: "14px 0px 14px 0px",
}));

export const StyledConfirmButton = styled(ActionButton)({
    height: "50px",
    flexGrow: 1,
});

export const CartSummaryBackground = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.cardBackground.main,
    border: `1px solid ${theme.palette.border.main}`,
    borderRadius: "5px"
}));

export const CartSummaryContent = styled(Box)({
    margin: "16px"
});