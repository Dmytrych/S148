'use client'

import {AppBar, styled, Toolbar} from '@mui/material';
import {Color} from "@/constants/color";
import SmallLogo from "@/components/ui/SmallLogo";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: Color.NavbarBackgroundColor,
  position: 'sticky',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
});

const Navbar = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <SmallLogo/>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
