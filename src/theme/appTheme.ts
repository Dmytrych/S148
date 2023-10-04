import {ThemeOptions} from "@mui/material";
import {Color} from "@/constants/color";

export const appTheme = {
    typography: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        color: Color.TextColor,
    },
    components: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': `"Roboto", "Helvetica", "Arial", sans-serif`
            },
        },
    },
} as ThemeOptions;