import {Box, Typography} from '@mui/material';

export enum Size {
    Small = 'small',
    Medium = 'medium',
    Big = 'big',
}

interface IPriceTagProps {
    value: string;
    size?: Size;
    currencySize?: Size;
}

export function PriceTag({ value, size = Size.Big, currencySize = Size.Small }: IPriceTagProps) {
    const priceFontSize = resolveFontSize(size);
    const currencyFontSize = resolveFontSize(currencySize);

    return (
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <Typography style={{ fontSize: priceFontSize, textAlign: "center" }}>{value}</Typography>
            <Typography style={{ marginLeft: "5px", fontSize: currencyFontSize, textAlign: "center" }}>₴</Typography>
        </Box>
    )
}

const resolveFontSize = (size: Size) => {
    switch (size) {
        case Size.Big:
            return '32px';
        case Size.Medium:
            return '24px';
        case Size.Small:
            return '16px';
    }
}