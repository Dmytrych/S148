import {Badge, Box, IconButton, Menu, MenuItem, Stack, Typography} from "@mui/material";
import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {NavItem} from "@/interfaces/layout";
import {StyledLink} from "@/components/Navbar/components/NavbarMobileMenu/NavbarMobileMenu.styles";
import {Routes} from "@/routes";

interface Props {
  cartCount: number;
  items: NavItem[];
}

export function NavbarMobileMenu({items, cartCount}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick} color="primary" size="large">
        <MenuIcon />
      </IconButton>
      <Menu open={isOpen} anchorEl={anchorEl} onClose={handleClose}>
        {items.map((item, index) => <MenuItem key={index}>
          <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={2} minWidth="200px">
            {item.icon}
            <Badge color="primary" badgeContent={cartCount} invisible={item.link !== Routes.Cart}>
              <StyledLink href={item.link} onClick={handleClose}>
                <Typography variant="h5">{item.title}</Typography>
              </StyledLink>
            </Badge>
          </Stack>
        </MenuItem>)}
      </Menu>
    </Box>
  )
}