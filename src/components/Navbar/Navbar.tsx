import {AppBar, Badge, styled, Toolbar, Typography} from '@mui/material';
import {useMemo} from 'react';
import logo from '../../../public/images/S148.png';
import Link from "next/link";
import {locale} from "@/constants/locale/ua";
import Image from "next/image";
import {Color} from "@/constants/color";
import {topBarHeight} from "@/constants/size";
import {Routes} from "@/routes";
import {useCart} from "@/hooks/context/useCartState";

const Navbar = () => {
  const { cart } = useCart();

  const cartLinkDisabled = useMemo(() => {
    return cart && cart.length <= 0;
  }, [cart]);

  const cartCount = useMemo(() => {
    let total = 0;
    cart.forEach((cartItem) => total += cartItem.quantity);
    return total;
  }, [cart]);

  return (
    <StyledAppBar>
      <Toolbar>
        <LogoContainer src={logo} alt={"loading"} />
        <ItemMenu>
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
            {cartLinkDisabled ? (
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
        </ItemMenu>
      </Toolbar>
    </StyledAppBar>
  );
};

const CartBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    right: -5,
  },
})

const StyledAppBar = styled(AppBar)({
  backgroundColor: Color.NavbarBackgroundColor,
  fontFamily: 'var(--home-page-font-family)',
  position: 'sticky',
  height: topBarHeight,
  display: 'flex',
  justifyContent: 'center',
});

const TopBarItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: '50%',
  margin: '1rem',
});

const TopBarNavLinkDisabled = styled('span')({
  cursor: 'default',
  textDecoration: 'none',
});

const TopBarNavLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const LogoContainer = styled(Image)({
  width: 'auto',
  height: '60px',
  margin: '10px 0px',
});

const ItemMenu = styled('div')({
  paddingRight: '15vw',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'end',
  flexGrow: '9',
});

export default Navbar;
