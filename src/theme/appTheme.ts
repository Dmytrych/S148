import {PaletteColor, PaletteColorOptions, ThemeOptions} from "@mui/material";
import {Color} from "@/constants/color";

declare module '@mui/material/styles' {
    interface Palette {
        cardBackground: PaletteColor;
        border: PaletteColor;
    }

    interface PaletteOptions {
        cardBackground?: PaletteColorOptions | undefined;
        border?: PaletteColorOptions | undefined;
    }
}

export const appTheme = {
    palette: {
        primary: {
            main: Color.GlobalGreen, // Primary color
        },
        secondary: {
            main: '#FF4081', // Secondary color
        },
        background: {
            default: Color.White, // Default background color
        },
        text: {
            primary: Color.TextColor, // Primary text color
            secondary: Color.GlobalBlack60, // Secondary text color
        },
        cardBackground: {
            main: Color.GlobalBlack10, // Cart background color
        },
        border: {
            main: Color.GlobalBlack20, // Border color
        }
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        color: Color.TextColor,
        h1: {
            fontSize: '2.5rem', // Heading 1 font size
            fontWeight: 600, // Heading 1 font weight
        },
        h2: {
            fontSize: '2rem', // Heading 2 font size
            fontWeight: 500, // Heading 2 font weight
        },
        h3: {
            fontSize: '1.75rem', // Heading 3 font size
            fontWeight: 500, // Heading 3 font weight
        },
        h4: {
            fontSize: '1.5rem', // Heading 4 font size
            fontWeight: 500, // Heading 4 font weight
        },
        h5: {
            fontSize: '1.25rem', // Heading 5 font size
            fontWeight: 500, // Heading 5 font weight
        },
        h6: {
            fontSize: '1rem', // Heading 6 font size
            fontWeight: 500, // Heading 6 font weight
        },
        body1: {
            fontSize: '1rem', // Body text font size
            lineHeight: 1.5, // Body text line height
        },
        body2: {
            fontSize: '0.875rem', // Smaller body text font size
            lineHeight: 1.4, // Smaller body text line height
        },
        button: {
            textTransform: 'none', // Button text capitalization
        },
    },
    components: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': `"Roboto", "Helvetica", "Arial", sans-serif`
            },
        },
    },
} as ThemeOptions;