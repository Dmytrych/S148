import {Toolbar} from '@mui/material';
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
import {ItemMenu, StyledAppBar} from "@/components/navbar/Navbar/Navbar.styled";

const NAVBAR_ITEMS: NavItem[] = [
  {
    title: locale.products_page,
    link: Routes.Home,
    icon: <StorefrontIcon />,
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
