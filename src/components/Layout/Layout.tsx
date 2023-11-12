import {Box, styled} from "@mui/material";
import AppTopBar from "../Navbar";
import { ReactNode } from "react";
import {Footer} from "@/components/Layout/components/Footer/Footer";

export function Layout({ children }: { children: ReactNode}) {
    return (<AppWindowLayout>
        <Box minHeight="100vh" mb={3}>
            <AppTopBar />
            <main>{children}</main>
        </Box>
        <Footer/>
    </AppWindowLayout>)
}

const AppWindowLayout = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh"
})