'use client'

import {Box, Button, Stack, styled, Typography} from "@mui/material";
import LogoBanner from "@/components/ui/logo/LogoBanner";

const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.logo,
}));

export default function TopBuyBanner() {
  return (
    <StyledStack alignItems='center' py={2}>
      <Box>
        <LogoBanner/>
        <Box>
          <Typography variant="body_squares" textAlign="center" color='white'>
            Засоби для догляду за зброЄю
          </Typography>
        </Box>
      </Box>
    </StyledStack>
  );
}
