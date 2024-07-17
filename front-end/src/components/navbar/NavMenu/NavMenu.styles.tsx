import {Badge, styled} from "@mui/material";
import Link from "next/link";

export const CartBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    right: -5,
  },
})

export const TopBarItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: '50%',
  margin: '1rem',
});

export const TopBarNavLinkDisabled = styled('span')({
  cursor: 'default',
  textDecoration: 'none',
});

export const ItemMenu = styled('div')({
  paddingRight: '15vw',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'end',
  flexGrow: '9',
});