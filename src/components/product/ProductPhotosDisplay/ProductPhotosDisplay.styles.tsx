import {Box, styled} from "@mui/material";
import {appScrollbar} from "@/theme/mixins/scrollbarMixin";

export const ImageScroll = styled(Box)(({theme}) => ({
    overflowY: "scroll",
    height: "100%",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none"
    }
}))