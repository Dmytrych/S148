'use client'

import {AppBar, Box, styled, Toolbar} from '@mui/material';
import {useMemo} from 'react';
import {useCart} from "@/hooks/context/useCartState";
import {NavMenu} from "../NavMenu";
import {useIsMobile} from "@/hooks/useIsMobile";
import {MobileNavMenu} from "../MobileNavMenu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {Routes} from "@/routes";
import {NavItem} from "@/interfaces/layout";
import {locale} from "@/locale/ua";
import {SmallLogo} from "@/components/SmallLogo";
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
  justifyContent: 'end',
  flexGrow: '9',
  [theme.breakpoints.up("md")]: {
    paddingRight: "200px"
  }
}));

const NAVBAR_ITEMS: NavItem[] = [
  {
    title: locale.products_page,
    link: Routes.Home,
    icon: <StorefrontIcon />,
  },
  {
    title: locale.articles_page,
    link: Routes.Cart,
    icon: <Article />,
  },
  {
    title: locale.cart_page,
    link: Routes.Cart,
    icon: <ShoppingCartIcon />,
  }
]

const Navbar = () => {
  const isMobile = useIsMobile();
  const { cart } = useCart();

  const cartCount = useMemo(() => {
    return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  }, [cart]);

  return (
    <StyledAppBar>
      <Toolbar>
        <SmallLogo />
        <ItemMenu>
          { !isMobile ? (
            <NavMenu cartCount={cartCount}/>
          ) : (
            <MobileNavMenu cartCount={cartCount} items={NAVBAR_ITEMS}/>
          ) }
        </ItemMenu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
