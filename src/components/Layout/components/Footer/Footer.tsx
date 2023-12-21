import {Box, Container, Grid, IconButton, Stack, styled, Typography} from "@mui/material";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";
import {Socials} from "@/components/Layout/components/Footer/components/Socials";
import {Contacts} from "@/components/Layout/components/Footer/components/Contacts";
import {SmallLogo} from "@/components/SmallLogo";

const companyName = 'S148 Engineering';

export function Footer() {
  return (
    <FooterContent>
      <Stack direction="column" justifyContent="center">
        <Box my={2}>
          <Socials/>
        </Box>
        <Contacts/>
        <Box display="flex" justifyContent="center" my={2}>
          <SmallLogo />
        </Box>
      </Stack>
    </FooterContent>
  );
}

const FooterContent = styled("footer")(({theme}) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
}))