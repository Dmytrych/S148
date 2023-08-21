import { styled } from '@mui/material';

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Big = 'big',
}

const PriceTag = ({
  value,
  size = Size.Big,
}: {
  value: number;
  size?: Size;
}): JSX.Element => (
  <div>
    <PriceTagContent size={size}>{value}</PriceTagContent>
    <span style={{ fontSize: size === Size.Big ? '1.5em' : '1em' }}>₴</span>
  </div>
);

export default PriceTag;

const PriceTagContent = styled('span')(({ size }: { size: Size }) => ({
  fontSize: size === Size.Big ? '2em' : '1em',
  marginLeft: '20px',
}));
