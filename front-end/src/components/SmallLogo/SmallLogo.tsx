import {LogoContainer} from "@/components/SmallLogo/SmallLogo.styles";
import logo from "../../../public/images/S148.png";
import {Box} from "@mui/material";

export function SmallLogo() {
  return (
    <Box>
      <LogoContainer src={logo} alt={"Logo"} priority/>
    </Box>
  )
}