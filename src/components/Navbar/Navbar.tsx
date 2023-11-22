import {AppBar, styled, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import {useMemo} from 'react';
import logo from '../../../public/images/S148.png';
import Image from "next/image";
import {Color} from "@/constants/color";
import {topBarHeight} from "@/constants/size";
import {useCart} from "@/hooks/context/useCartState";
import {NavMenu} from "@/components/Navbar/components/NavMenu";
import {useIsMobile} from "@/hooks/useIsMobile";
import {NavbarMobileMenu} from "@/components/Navbar/components/NavbarMobileMenu";
import {NavbarMobileMenuItem} from "@/components/Navbar/components/NavbarMobileMenu/NavbarMobileMenu";
import {useRouter} from "next/router";
import {Routes} from "@/routes";

const Navbar = () => {
  const { replace } = useRouter();
  const isMobile = useIsMobile();
  const { cart } = useCart();

  const cartCount = useMemo(() => {
    let total = 0;
    cart.forEach((cartItem) => total += cartItem.quantity);
    return total;
  }, [cart]);

  const navbar: NavbarMobileMenuItem[] = [{
    item: <Typography variant="body1">variant</Typography>,
    onClick: () => replace(Routes.Cart)
  }]

  return (
    <StyledAppBar>
      <Toolbar>
        <LogoContainer src={logo} alt={"loading"} />
        <ItemMenu>
          { !isMobile ? (
            <NavMenu cartCount={cartCount}/>
          ) : (
            <NavbarMobileMenu items={navbar}/>
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
