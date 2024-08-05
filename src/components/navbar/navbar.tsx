import { useState } from 'react';
import Link from 'next/link';
import { Burger, Logo, MobileNavLinks, NavLinks, NavbarContainer, navBarSize } from './navbar.styles';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>
          <Link href="/" passHref>
            <Image alt={'Logo image of a leaf'} height={80} width={80} src={'/images/logo.png'} />
          </Link>
        </Logo>
        <NavLinks>
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/garden" passHref>
            My Garden
          </Link>
          <Link href="/learn" passHref>
            Learn
          </Link>
        </NavLinks>
        <Burger onClick={toggleNav}>
          {nav ? <RxCross1 /> : <RxHamburgerMenu style={{ fontSize: '40px', color: '#3b3b3b' }} />}
        </Burger>
        <MobileNavLinks open={nav}>
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/garden" passHref>
            My Garden
          </Link>
          <Link href="/learn" passHref>
            Learn
          </Link>
        </MobileNavLinks>
      </NavbarContainer>
    </>
  );
};
