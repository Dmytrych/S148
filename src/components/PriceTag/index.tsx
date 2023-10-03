import {Box, styled, Typography} from '@mui/material';

export enum Size {
    Small = 'small',
    Medium = 'medium',
    Big = 'big',
}

interface IPriceTagProps {
    value: string;
    size?: Size;
}

export function PriceTag({ value, size = Size.Big }: IPriceTagProps) {
    return (
        <Box display="flex" flexDirection="row">
            <PriceTagContent size={size}>{value}</PriceTagContent>
            <Typography style={{ fontSize: size === Size.Big ? '1.5em' : '1em' }}>₴</Typography>
        </Box>
    )
};

const PriceTagContent = styled(Typography)(({ size }: { size: Size }) => ({
    fontSize: size === Size.Big ? '2em' : '1em'
}));
