import {Button, Stack, Link as MuiLink, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {Routes} from "@/routes";
import {useIsMobile} from "@/hooks/useIsMobile";

export function CheckoutSuccessView() {
  const isMobile = useIsMobile();
  const imageSize = isMobile ? 300 : 400;
  return (
    <Stack alignItems="center">
      <Stack flexDirection="column" spacing={2} mx={1} mt={{ xs: 20, sm: 1 }}>
        <Image src="/images/checkoutSuccess.png" alt="Checkout success" width={imageSize} height={imageSize} />
        <Stack alignItems="center">
          <Typography variant="h3">Замовлення успішне</Typography>
        </Stack>
        <Link href={Routes.Home}>
          <Button component={MuiLink} variant="contained" color="primary" size="large" fullWidth>
            Продовжити покупки
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}