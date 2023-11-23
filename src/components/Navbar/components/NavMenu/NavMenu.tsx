import {Routes} from "@/routes";
import {Typography} from "@mui/material";
import {locale} from "@/constants/locale/ua";
import {CartBadge, TopBarItem, TopBarNavLink, TopBarNavLinkDisabled } from "./NavMenu.styles";
import {NavItem} from "@/interfaces/layout";

interface Props {
  cartCount: number;
}

export function NavMenu({cartCount}: Props) {
  return (
    <>
      <TopBarItem>
        <TopBarNavLink href={Routes.Home}>
          <Typography variant="navbarLink">{locale.home_page}</Typography>
        </TopBarNavLink>
      </TopBarItem>
      <TopBarItem>
        <TopBarNavLink href={Routes.Products}>
          <Typography variant="navbarLink">{locale.products_page}</Typography>
        </TopBarNavLink>
      </TopBarItem>
      <TopBarItem>
        {cartCount <= 0 ? (
          <TopBarNavLinkDisabled>
            <Typography variant="navbarLink" sx={{ opacity: "20%" }}>{locale.cart_page}</Typography>
          </TopBarNavLinkDisabled>
        ) : (
          <CartBadge badgeContent={cartCount} color="primary">
            <TopBarNavLink href={Routes.Cart}>
              <Typography variant="navbarLink">{locale.cart_page}</Typography>
            </TopBarNavLink>
          </CartBadge>
        )}
      </TopBarItem>
    </>
  )
}