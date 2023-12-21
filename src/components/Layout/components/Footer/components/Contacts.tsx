import {Box, Stack} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "number";
const EMAIL = 's148.engineering@gmail.com';

export function Contacts() {
  return (
    <Stack direction="row" justifyContent="center" gap={4}>
      <Stack direction="row">
        <Box mr={1}>
          <LocalPhoneIcon />
        </Box>
        <Box>
          {PHONE_NUMBER}
        </Box>
      </Stack>
      <Stack direction="row">
        <Box mr={1}>
          <EmailIcon />
        </Box>
        <Box>
          {EMAIL}
        </Box>
      </Stack>
    </Stack>
  )
}