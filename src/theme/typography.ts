import {CSSProperties} from "react";
import {TypographyOptions} from "@mui/material/styles/createTypography";
import {Palette} from "@mui/material/styles/createPalette";
import {Color} from "@/constants/color";

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navbarLink: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    link: CSSProperties;
  }

  interface TypographyVariantsOptions {
    link?: CSSProperties;
  }
}

export default {
  fontFamily: ["Roboto", "Arial", "sans-serif"].join(','),
  color: Color.TextColor,
  h1: {
    fontSize: "2.5rem",
    "@media (min-width:900px)": {
      fontSize: "5rem"
    },
    fontWeight: 600,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 600, // Heading 3 font weight
  },
  h4: {
    fontSize: '1.5rem', // Heading 4 font size
    fontWeight: 600, // Heading 4 font weight
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