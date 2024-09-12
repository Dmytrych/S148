import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import {IconButton, Stack, styled} from '@mui/material';
import { useState } from 'react';

const limit = 200;

type PlusMinusControlInput = {
  onChange?: (newQuantity: number) => void;
  defaultValue?: number;
};

function PlusMinusControl({
  onChange = () => {},
  defaultValue = 1,
}: PlusMinusControlInput) {
  const [value, setValue] = useState(defaultValue);

  const handleDecrease = () => {
    const newValue = value > 1 ? value - 1 : 1;
    setValue(() => newValue);
    onChange(newValue);
  };

  const handleIncrease = () => {
    const newValue = value < limit ? value + 1 : value;
    setValue(() => newValue);
    onChange(newValue);
  };

  return (
    <Stack direction="row" alignItems="center">
      <IconButton onClick={handleDecrease} size="small">
        <RemoveCircleOutlineOutlinedIcon />
      </IconButton>
      <ValueContainer>{value}</ValueContainer>
      <IconButton onClick={handleIncrease} size="small">
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Stack>
  );
}

const ValueContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '10px',
});

export default PlusMinusControl;
