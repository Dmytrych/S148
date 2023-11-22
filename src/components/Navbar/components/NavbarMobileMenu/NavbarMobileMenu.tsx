import {Box, ClickAwayListener, IconButton, Menu, MenuItem} from "@mui/material";
import React, {ReactNode, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  items: NavbarMobileMenuItem[];
}

export interface NavbarMobileMenuItem {
  item: ReactNode;
  onClick: () => void;
}

export function NavbarMobileMenu({items}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("asdasd")
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu open={isOpen} anchorEl={anchorEl} onClose={handleClose}>
        {items.map((item, index) => <MenuItem key={index} onClick={() => {
          handleClose();
          item.onClick();
        }}>
          {item.item}
        </MenuItem>)}
      </Menu>
    </Box>
  )
}