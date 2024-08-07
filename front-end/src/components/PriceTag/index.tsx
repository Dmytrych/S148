import {Box, styled, SxProps, Typography} from '@mui/material';

interface PriceTagProps {
    price: number;
    currency?: string;
    size?: "small" | "medium" | "large";
}

export function PriceTag({ price, size, currency = "₴" }: PriceTagProps) {
  return (
    <PriceTagWrapper>
      <Price size={size}>{price.toFixed(2)}</Price>
      <Currency size={size}>{currency}</Currency>
    </PriceTagWrapper>
  )
}

const sizeStyles = {
  "small": {
    priceFontSize: '1.2rem',
    currencyFontSize: '1rem'
  },
  "medium": {
    priceFontSize: '1.3rem',
    currencyFontSize: '1.2rem'
  },
  "large": {
    priceFontSize: '2rem',
    currencyFontSize: '1.5rem'
  },
};

const PriceTagWrapper = styled(Box)(() => ({
  gap: 5,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Price = styled(Typography)<Pick<PriceTagProps, "size">>(({ theme, size = "medium" }) => ({
  fontWeight: "500",
  fontSize: sizeStyles[size].priceFontSize,
}));

const Currency = styled(Typography)<Pick<PriceTagProps, "size">>(({ theme, size = "medium" }) => ({
  color: theme.palette.text.secondary,
  fontSize: sizeStyles[size].currencyFontSize,
}));