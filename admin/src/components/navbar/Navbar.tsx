'use client'

import {AppBar, styled, Toolbar} from '@mui/material';
import {Color} from "@/constants/color";

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
        Admin UI
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
