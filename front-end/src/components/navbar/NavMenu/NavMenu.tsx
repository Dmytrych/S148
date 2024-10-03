'use client'

import {Routes} from "@/routes";
import {Typography, Badge, styled} from "@mui/material";
import {UndecoratedLink} from "../../ui/UndecoratedLink";
import {locale} from "@/locale/ua";

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

interface Props {
  cartCount: number;
}

export function NavMenu({cartCount}: Props) {
  return (
    <>
      <TopBarItem>
        <UndecoratedLink href={Routes.Home}>
          <Typography variant="navbarLink">{locale.products_page}</Typography>
        </UndecoratedLink>
      </TopBarItem>
      <TopBarItem>
        <UndecoratedLink href={Routes.Articles}>
          <Typography variant="navbarLink">{locale.articles_page}</Typography>
        </UndecoratedLink>
      </TopBarItem>
      <TopBarItem>
        {cartCount <= 0 ? (
          <TopBarNavLinkDisabled>
            <Typography variant="navbarLink" sx={{ opacity: "20%" }}>{locale.cart_page}</Typography>
          </TopBarNavLinkDisabled>
        ) : (
          <CartBadge badgeContent={cartCount} color="primary">
            <UndecoratedLink href={Routes.Cart}>
              <Typography variant="navbarLink">{locale.cart_page}</Typography>
            </UndecoratedLink>
          </CartBadge>
        )}
      </TopBarItem>
    </>
  )
}