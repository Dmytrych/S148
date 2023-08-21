import { Box } from '@mui/material';

export const ProductName = ({ value, size = 'big' }: { value: string, size: 'big' | 'medium' }) => (
  <Box
    sx={{
      fontSize: size === 'medium' ? '20px' : '30px',
      fontWeight: '600',
    }}
  >
    {value}
  </Box>
);
