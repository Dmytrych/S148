'use client'

import {AppBar, Box, IconButton, styled, Toolbar} from '@mui/material';
import {Color} from "@/constants/color";
import SmallLogo from "@/components/ui/SmallLogo";
import {useState} from "react";
import MenuDrawer from "@/components/navbar/MenuDrawer";
import MenuIcon from '@mui/icons-material/Menu';

export const StyledAppBar = styled(AppBar)({
  backgroundColor: Color.NavbarBackgroundColor,
  position: 'sticky',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenuOpen = () => {
    setMenuOpen((prevState) => !prevState);
  }

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <StyledAppBar>
      <Toolbar sx={{ gap: 2 }}>
        <Box>
          <IconButton size="large" onClick={toggleMenuOpen}>
            <MenuIcon/>
          </IconButton>
          <MenuDrawer open={menuOpen} onClose={closeMenu}/>
        </Box>
        <SmallLogo/>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
