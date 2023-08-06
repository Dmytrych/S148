import { Box } from "@mui/material";
import AppTopBar from "../Navbar";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode}) {
    return (<Box>
        <AppTopBar />
        <main>{children}</main>
    </Box>)
}