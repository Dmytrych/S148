import {Button, Stack, Link as MuiLink, Typography, Box} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {Routes} from "@/routes";
import {locale} from "@/locale/ua";

const IMAGE_SIZE = 300;

export function CheckoutSuccessView() {
  return (
    <Stack alignItems="center">
      <Stack flexDirection="column" spacing={2} mx={1} mt={{ xs: 20, sm: 1 }}>
        <Box display="flex" justifyContent="center">
          <Image src="/images/checkoutSuccess.png" alt="Checkout success" width={IMAGE_SIZE} height={IMAGE_SIZE} />
        </Box>
        <Stack alignItems="center">
          <Typography variant="h3">{locale.order_placement_successful}</Typography>
        </Stack>
        <Link href={Routes.Home}>
          <Button component={MuiLink} variant="contained" color="primary" size="large" fullWidth>
            {locale.continue_shopping}
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}