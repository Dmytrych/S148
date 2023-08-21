import {AppBar, styled, Toolbar, Typography} from '@mui/material';
import { useEffect, useState } from 'react';
import logo from '../../../public/images/S148.png';
import { useCart } from '@/hooks/useCart';
import Link from "next/link";
import {locale} from "@/constants/locale/ua";
import Image from "next/image";
import {Color} from "@/constants/color";
import {topBarHeight} from "@/constants/size";

const Navbar = () => {
  const [cartLinkDisabled, setCartLinkDisabled] = useState(true);
  const { cart } = useCart();

  useEffect(() => {
    setCartLinkDisabled(cart && cart.length <= 0);
  }, [cart]);

  return (
    <StyledAppBar>
      <Toolbar>
        <LogoContainer src={logo} alt={"loading"} />
        <ItemMenu>
          <TopBarItem>
            <TopBarNavLink href="/">
              <Typography>{locale.home_page}</Typography>
            </TopBarNavLink>
          </TopBarItem>
          <TopBarItem>
            <TopBarNavLink href="/products">
              <Typography>{locale.products_page}</Typography>
            </TopBarNavLink>
          </TopBarItem>
          <TopBarItem>
            {cartLinkDisabled ? (
              <TopBarNavLinkDisabled>
                <Typography color={Color.Inactive}>{locale.cart_page}</Typography>
              </TopBarNavLinkDisabled>
            ) : (
              <TopBarNavLink href="/cart">
                <Typography>{locale.cart_page}</Typography>
              </TopBarNavLink>
            )}
          </TopBarItem>
        </ItemMenu>
      </Toolbar>
    </StyledAppBar>
  );
};

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
