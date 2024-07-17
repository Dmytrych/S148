import {Box, Stack} from "@mui/material";
import {Socials} from "@/components/Footer/components/Socials";
import {Contacts} from "@/components/Footer/components/Contacts";
import {SmallLogo} from "@/components/SmallLogo";
import {StyledFooter} from "@/components/Footer/Footer.styled";
import Copyright from "@/components/ui/Copyright";

export function Footer() {
  return (
    <StyledFooter>
      <Stack direction="column" alignItems="center" gap={1}>
        <SmallLogo />
        <Socials/>
        <Contacts/>
        <Box display="flex" justifyContent="end"><Copyright/></Box>
      </Stack>
    </StyledFooter>
  );
}