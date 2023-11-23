import {AppBar, Box, styled, Toolbar} from '@mui/material';
import {useMemo} from 'react';
import logo from '../../../public/images/S148.png';
import Image from "next/image";
import {Color} from "@/constants/color";
import {topBarHeight} from "@/constants/size";
import {useCart} from "@/hooks/context/useCartState";
import {NavMenu} from "@/components/Navbar/components/NavMenu";
import {useIsMobile} from "@/hooks/useIsMobile";
import {NavbarMobileMenu} from "@/components/Navbar/components/NavbarMobileMenu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';
import {Routes} from "@/routes";
import {NavItem} from "@/interfaces/layout";
import {locale} from "@/locale/ua";

const NAVBAR_ITEMS: NavItem[] = [
  {
    title: locale.home_page,
    link: Routes.Home,
    icon: <HomeIcon />
  },
  {
    title: locale.products_page,
    link: Routes.Products,
    icon: <StorefrontIcon />
  },
  {
    title: locale.cart_page,
    link: Routes.Cart,
    icon: <ShoppingCartIcon />
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
        <LogoContainer src={logo} alt={"loading"} />
        <ItemMenu>
          { !isMobile ? (
            <NavMenu cartCount={cartCount} items={NAVBAR_ITEMS}/>
          ) : (
            <NavbarMobileMenu items={NAVBAR_ITEMS}/>
          ) }
        </ItemMenu>
      </Toolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)({
  backgroundColor: Color.NavbarBackgroundColor,
  position: 'sticky',
  height: topBarHeight,
  display: 'flex',
  justifyContent: 'center',
});

const LogoContainer = styled(Image)({
  width: 'auto',
  height: '60px',
  margin: '10px 0px',
});

const ItemMenu = styled(Box)(({theme}) => ({
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

export default Navbar;
