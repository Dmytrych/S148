import {Box, Stack} from "@mui/material";
import Navbar from "./navbar/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode}) => {
  return (<Stack direction="column" width="100%">
    <Box minHeight="100vh" overflow="hidden">
      <Navbar />
      <main>{children}</main>
    </Box>
  </Stack>)
}

export default Layout;