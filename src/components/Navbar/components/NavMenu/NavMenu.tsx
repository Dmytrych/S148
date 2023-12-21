import {Routes} from "@/routes";
import {Typography} from "@mui/material";
import {locale} from "@/constants/locale/ua";
import {CartBadge, TopBarItem, TopBarNavLinkDisabled } from "./NavMenu.styles";
import {UndecoratedLink} from "@/components/UndecoratedLink";

interface Props {
  cartCount: number;
}

export function NavMenu({cartCount}: Props) {
  return (
    <>
      <TopBarItem>
        <UndecoratedLink href={Routes.Products}>
          <Typography variant="navbarLink">{locale.products_page}</Typography>
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