/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import { Burger, Logo, MobileNavLinks, NavLinks, NavbarContainer, navBarSize } from './navbar.styles';
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
        <Link href="/" passHref> <Logo>
         
            <img alt={'Logo image of a leaf'} src={'images/logo.png'} />
            <h1> botanify</h1>
        

        </Logo>  </Link>
        <NavLinks>
          <Link href="/plant-care" passHref>
            Plant Care
          </Link>
          <Link href="/garden" passHref>
            Log in
          </Link>
        </NavLinks>
        <Burger onClick={toggleNav}>
          {nav ? <RxCross1  style={{ fontSize: '30px', color: '#3b3b3b' }} /> : <RxHamburgerMenu style={{ fontSize: '30px', color: '#3b3b3b' }} />}
        </Burger>
        <MobileNavLinks open={nav}>
          <li>
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/garden" passHref>
              My Garden
            </Link>
          </li>
          <li>
            <Link href="/learn" passHref>
              Learn
            </Link>
          </li>
        </MobileNavLinks>
      </NavbarContainer>
    </>
  );
};
