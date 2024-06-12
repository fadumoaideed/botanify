import { useState } from 'react';
import Link from 'next/link';
import { Burger, Logo, NavLinks, NavbarContainer } from './navbar.styles';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <NavbarContainer>
      <Logo >
        <Link href="/" passHref>
          Logo
        </Link>
      </Logo>
      <NavLinks open={nav}>
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/my-garden" passHref>
          My Garden
        </Link>
        <Link href="/learn" passHref>
          Learn
        </Link>{' '}
      </NavLinks>
      <Burger onClick={toggleNav}>{nav ? 'X' : '='}</Burger>
    </NavbarContainer>
  );
};
