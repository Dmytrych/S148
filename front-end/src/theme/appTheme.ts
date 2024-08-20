'use client'

import {createTheme, PaletteColor, PaletteColorOptions, Theme, ThemeOptions} from "@mui/material";
import {Color} from "@/constants/color";
import {CSSProperties} from "react";
import typography from "./typography";
import breakpoints from "@/theme/breakpoints";

declare module '@mui/material/styles' {
    interface Palette {
        cardBackground: PaletteColor;
        border: PaletteColor;
        other: {
          black20: string;
        },
        fluid_text: PaletteColor;
    }

    interface PaletteOptions {
        cardBackground?: PaletteColorOptions | undefined;
        border?: PaletteColorOptions | undefined;
        fluid_text?: PaletteColorOptions | undefined;
    }

    interface ButtonVariants {
        primary: CSSProperties;
    }

    interface ButtonVariantsOptions {
        primary: CSSProperties;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primaryContained: true;
        primaryOutlined: true;
    }
}

const appTheme = {
  breakpoints,
  typography,
  palette: {
    primary: {
      main: Color.GlobalGreen,
      contrastText: Color.White
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
    },
    other: {
      black20: Color.GlobalBlack80,
    },
    action: {
      hover: "0.8",
    },
    fluid_text: {
      main: Color.GlobalBlack,
      contrastText: Color.White
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overflowX: 'hidden'
        },
        body: {
          overflowX: 'hidden'
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: Color.GlobalGreen40,
            color: Color.White,
            pointerEvents: 'none'
          }
        }
      },
      variants: [
        {
          props: { variant: 'primaryContained' },
          style: ({ theme } : {theme: Theme}) => {
            return {
              '&:hover': {
                opacity: theme.palette.action.hover,
                backgroundColor: theme.palette.primary[theme.palette.mode],
              },
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary[theme.palette.mode],
            }
          },
        },
        {
          props: { variant: 'primaryOutlined' },
          style: ({ theme } : {theme: Theme}) => {
            return {
              '&:hover': {
                opacity: theme.palette.action.hover,
              },
              color: theme.palette.primary[theme.palette.mode],
              border: `1px solid ${theme.palette.primary[theme.palette.mode]}`
            }
          },
        }
      ]
    }
  },
} as ThemeOptions;

export default createTheme(appTheme);