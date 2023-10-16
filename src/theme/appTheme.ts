import {PaletteColor, PaletteColorOptions, ThemeOptions} from "@mui/material";
import {Color} from "@/constants/color";
import {CSSProperties} from "react";

declare module '@mui/material/styles' {
    interface Palette {
        cardBackground: PaletteColor;
        border: PaletteColor;
    }

    interface PaletteOptions {
        cardBackground?: PaletteColorOptions | undefined;
        border?: PaletteColorOptions | undefined;
    }

    interface TypographyVariants {
      link: CSSProperties;
    }

    interface TypographyVariantsOptions {
      link?: CSSProperties;
    }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    link: true;
  }
}

export const appTheme = {
    palette: {
        primary: {
            main: Color.GlobalGreen,
        },
        secondary: {
            main: Color.GlobalBlack40,
        },
        background: {
            default: Color.White,
        },
        text: {
            primary: Color.TextColor,
            secondary: Color.GlobalBlack60,
        },
        cardBackground: {
            main: Color.GlobalBlack10,
        },
        border: {
            main: Color.GlobalBlack20,
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
        link: {
            color: Color.TextColor,
            "&:hover": {
                textDecoration: 'underline',
                cursor: 'pointer',
                color: Color.GlobalGreen
            },
        },
        navbarLink: {
            link: {
                fontFamily: 'Squares Bold, Arial, sans-serif',
                color: Color.TextColor,
                "&:hover": {
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    color: Color.GlobalGreen
                },
            },
        },
        button: {
            textTransform: 'none', // Button text capitalization
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: Color.GlobalGreen,
                    color: Color.White,
                    '&:hover': {
                        backgroundColor: Color.GlobalBlack80,
                    },
                },
                root: {
                    "&.Mui-disabled": {
                        backgroundColor: Color.GlobalGreen40,
                        color: Color.White,
                        pointerEvents: 'none'
                    }
                }
            },
        },
    },
} as ThemeOptions;