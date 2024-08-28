'use client'

import {Box, Stack, styled} from "@mui/material";
import {Socials} from "@/components/Footer/components/Socials";
import {Contacts} from "@/components/Footer/components/Contacts";
import {SmallLogo} from "@/components/SmallLogo";
import Copyright from "@/components/ui/Copyright";

const StyledFooter = styled("footer")(({theme}) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
}))

export function Footer() {
  return (
    <StyledFooter>
      <Stack direction="column" alignItems="center" gap={1} mt={1}>
        <SmallLogo />
        <Socials/>
        <Contacts/>
        <Box display="flex" justifyContent="end"><Copyright/></Box>
      </Stack>
    </StyledFooter>
  );
}