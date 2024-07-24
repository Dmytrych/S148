import {
  Badge,
  Box,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem, MenuList,
  Paper,
  Popper,
  Stack,
  Typography
} from "@mui/material";
import React, {useCallback, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {NavItem} from "@/interfaces/layout";
import {StyledLink} from "@/components/navbar/MobileNavMenu/MobileNavMenu.styles";
import {Routes} from "@/routes";

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
              {items.map((item, index) => <MenuItem key={index}>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={2} minWidth="200px">
                  {item.icon}
                  <Badge color="primary" badgeContent={cartCount} invisible={item.link !== Routes.Cart}>
                    <StyledLink href={item.link}>
                      <Typography variant="h5">{item.title}</Typography>
                    </StyledLink>
                  </Badge>
                </Stack>
              </MenuItem>)}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Box>
  )
}