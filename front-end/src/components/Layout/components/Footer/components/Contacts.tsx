import {Box, Stack, Typography} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import { UndecoratedLink } from "@/components/UndecoratedLink";
import {locale} from "@/constants/locale/ua";

const PHONE_NUMBER_FOR_URL = process.env.NEXT_PUBLIC_PHONE_NUMBER_FOR_URL ?? "phoneURL";
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "number";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? 's148.engineering@gmail.com';

export function Contacts() {
  return (
    <Stack direction="row" justifyContent="center" gap={4}>
      <Stack direction="row">
        <Box mr={1}>
          <LocalPhoneIcon color="primary" />
        </Box>
        <UndecoratedLink href={`tel:${PHONE_NUMBER_FOR_URL}`}>
          <Typography variant="navbarLink">{PHONE_NUMBER}</Typography>
        </UndecoratedLink>
      </Stack>
      <Stack direction="row">
        <Box mr={1}>
          <EmailIcon color="primary" />
        </Box>
        <UndecoratedLink href={`mailto:${EMAIL}`}>
          <Typography variant="navbarLink">{EMAIL}</Typography>
        </UndecoratedLink>
      </Stack>
    </Stack>
  )
}