import {CSSProperties} from "react";
import {TypographyOptions} from "@mui/material/styles/createTypography";
import {Palette} from "@mui/material/styles/createPalette";
import {Color} from "@/constants/color";
import {Font} from "@/constants/fonts";

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navbarLink: true;
    h5_squares: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h5_squares: CSSProperties;
  }

  interface TypographyVariantsOptions {
    h5_squares?: CSSProperties;
  }
}

export default {
  fontFamily: ["Roboto", "Arial", "sans-serif"].join(','),
  color: Color.TextColor,
  h1: {
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
      fontSize: '3rem',
    },
    '@media (min-width:960px)': {
      fontSize: '3.5rem',
    },
    '@media (min-width:1280px)': {
      fontSize: '4rem',
    },
  },
  h2: {
    fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    '@media (min-width:960px)': {
      fontSize: '3rem',
    },
    '@media (min-width:1280px)': {
      fontSize: '3.5rem',
    },
  },
  h3: {
    fontSize: '1.75rem',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    '@media (min-width:960px)': {
      fontSize: '2.25rem',
    },
    '@media (min-width:1280px)': {
      fontSize: '2.5rem',
    },
  },
  h4: {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '1.75rem',
    },
    '@media (min-width:960px)': {
      fontSize: '2rem',
    },
    '@media (min-width:1280px)': {
      fontSize: '2.25rem',
    },
  },
  h5_squares: {
    fontSize: '1.25rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width:960px)': {
      fontSize: '1.75rem',
    },
    '@media (min-width:1280px)': {
      fontSize: '2rem',
    },
    fontFamily: Font.SquaresBold,
  },
  h5: {
    fontSize: '1.25rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width:960px)': {
      fontSize: '1.75rem',
    },
    '@media (min-width:1280px)': {
      fontSize: '2rem',
    },
  },
  h6: {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.25rem',
    },
    '@media (min-width:960px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width:1280px)': {
      fontSize: '1.75rem',
    },
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.4,
  },
  navbarLink: {
    fontFamily: 'Squares Bold',
    color: Color.TextColor,
    "&:hover": {
      textDecoration: 'underline',
      cursor: 'pointer',
      color: Color.GlobalGreen
    },
  },
  button: {
    textTransform: 'none'
  },
} as TypographyOptions | ((palette: Palette) => TypographyOptions);