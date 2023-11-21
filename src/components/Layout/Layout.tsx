import {Box, Stack, styled} from "@mui/material";
import AppTopBar from "../Navbar";
import { ReactNode } from "react";
import {Footer} from "@/components/Layout/components/Footer/Footer";

export function Layout({ children }: { children: ReactNode}) {
    return (<Stack direction="column" width="100%">
        <Box minHeight="100vh">
            <AppTopBar />
            <main>{children}</main>
        </Box>
        <Footer/>
    </Stack>)
}