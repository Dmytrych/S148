'use client'

import logo from "../../../public/images/S148.png";
import {Box, styled} from "@mui/material";
import Image from "next/image";

const LogoContainer = styled(Image)({
  width: 'auto',
  height: '60px',
  margin: '10px 0px',
});

export function SmallLogo() {
  return (
    <Box>
      <LogoContainer src={logo} alt={"Logo"} priority/>
    </Box>
  )
}