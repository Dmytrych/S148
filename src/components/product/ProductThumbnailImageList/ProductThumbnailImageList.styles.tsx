import {Box, styled} from "@mui/material";

export const HoverHighlightBox = styled(Box)({
    transition: "all 0.1s ease-in-out",
    "&:hover": {
        transform: "scale(1.1)"
    }
})