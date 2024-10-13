'use client'

import {AppBar, Box, styled, Toolbar} from '@mui/material';
import {useMemo} from 'react';
import {useCart} from "@/hooks/context/useCartState";
import {NavMenu} from "../NavMenu";
import {MobileNavMenu} from "../MobileNavMenu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {Routes} from "@/routes";
import {NavItem} from "@/interfaces/layout";
import {locale} from "@/locale/ua";
import {Color} from "@/constants/color";
import {topBarHeight} from "@/constants/size";
import {Article} from "@mui/icons-material";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: Color.NavbarBackgroundColor,
  position: 'sticky',
  height: topBarHeight,
  display: 'flex',
  justifyContent: 'center',
});

export const ItemMenu = styled(Box)(({theme}) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  flexGrow: '9',
  [theme.breakpoints.down("md")]: {
    justifyContent: "end"
  }
}));

const MobileOnlyContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none"
  }
}))

const DesktopOnlyContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none"
  },
  display: "flex",
  flexDirection: "row"
}))

const NAVBAR_ITEMS: NavItem[] = [
  {
    title: locale.products_page,
    link: Routes.Home,
    icon: <StorefrontIcon />,
  },
  {
    title: locale.articles_page,
    link: Routes.Articles,
    icon: <Article />,
  },
  {
    title: locale.cart_page,
    link: Routes.Cart,
    icon: <ShoppingCartIcon />,
  }
]

const Navbar = () => {
  const { cart } = useCart();

  const cartCount = useMemo(() => {
    return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  }, [cart]);

  return (
    <StyledAppBar>
      <Toolbar sx={{ justifyContent: "center" }}>
        <ItemMenu>
          <DesktopOnlyContent>
            <NavMenu cartCount={cartCount}/>
          </DesktopOnlyContent>
          <MobileOnlyContent>
            <MobileNavMenu cartCount={cartCount} items={NAVBAR_ITEMS}/>
          </MobileOnlyContent>
        </ItemMenu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
