'use client'

import {
  Badge,
  Box,
  ClickAwayListener,
  IconButton,
  MenuItem, MenuList,
  Paper,
  Popper,
  Stack, styled,
  Typography
} from "@mui/material";
import React, {useCallback, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {NavItem} from "@/interfaces/layout";
import {Routes} from "@/routes";
import Link from "next/link";

export const StyledLink = styled(Link)(({theme}) => ({
  textDecoration: "none",
  color: theme.palette.text.primary
}))

interface Props {
  cartCount: number;
  items: NavItem[];
}

export function MobileNavMenu({items, cartCount}: Props) {
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen]);

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setIsOpen(false);
  };

  return (
    <Box>
      <IconButton onClick={handleClick} ref={anchorRef} color="primary" size="large">
        <MenuIcon />
      </IconButton>
      <Popper open={isOpen} anchorEl={anchorRef.current} placement="bottom-start" sx={{ zIndex: 100 }} disablePortal>
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              id="composition-menu"
              aria-labelledby="composition-button"
            >
              {items.map((item, index) => <StyledLink href={item.link} key={index}>
                <MenuItem>
                  <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={2} minWidth="200px">
                    {item.icon}
                    <Badge color="primary" badgeContent={cartCount} invisible={item.link !== Routes.Cart}>
                      <Typography variant="h5">{item.title}</Typography>
                    </Badge>
                  </Stack>
                </MenuItem>
              </StyledLink>)}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Box>
  )
}