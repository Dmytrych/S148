import {Box, Stack} from "@mui/material";
import AppTopBar from "./navbar/Navbar";
import { ReactNode } from "react";
import {Footer} from "@/components/Footer/Footer";

const Layout = ({ children }: { children: ReactNode}) => {
  return (<Stack direction="column" width="100%">
    <Box minHeight="100vh" overflow="hidden">
      <AppTopBar />
      <main>{children}</main>
    </Box>
    <Footer/>
  </Stack>)
}

export default Layout;