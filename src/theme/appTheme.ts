import {ThemeOptions} from "@mui/material";
import {Color} from "@/constants/color";

export const appTheme = {
    typography: {
        fontFamily: "'Open Sans', 'Roboto', sans-serif",
        color: Color.TextColor
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: "'Open Sans', 'Roboto', sans-serif",
                },
            },
        },
    },
} as ThemeOptions;