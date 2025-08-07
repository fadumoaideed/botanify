/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import {
   Burger,
   Logo,
   MobileNavLinks,
   NavLinksContainer,
   NavbarContainer
} from './navbar.styles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { NavbarLinks } from './navbar-links';

export const Navbar = () => {
   const [nav, setNav] = useState(false);
   const toggleNav = () => {
      setNav(!nav);
   };

   // Handle keyboard navigation for mobile menu
   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
         e.preventDefault();
         toggleNav();
      }
   };

   return (
      <>
         <NavbarContainer>
            <Link href="/" passHref>
               <Logo>
                  <img
                     alt={'Botanify logo - leaf icon'}
                     src={'images/logo.png'}
                  />
                  <h1> botanify</h1>
               </Logo>
            </Link>
            <NavLinksContainer>
               <NavbarLinks />
            </NavLinksContainer>
            <Burger
               onClick={toggleNav}
               onKeyDown={handleKeyDown}
               role="button"
               tabIndex={0}
               aria-label={
                  nav ? 'Close navigation menu' : 'Open navigation menu'
               }
               aria-expanded={nav}
               aria-controls="mobile-nav-menu"
            >
               {nav ? (
                  <RxCross1
                     style={{ fontSize: '30px', color: '#3b3b3b' }}
                     aria-hidden="true"
                  />
               ) : (
                  <RxHamburgerMenu
                     style={{ fontSize: '30px', color: '#3b3b3b' }}
                     aria-hidden="true"
                  />
               )}
            </Burger>
            <MobileNavLinks
               open={nav}
               id="mobile-nav-menu"
               role="navigation"
               aria-label="Mobile navigation"
            >
               <NavbarLinks />
            </MobileNavLinks>
         </NavbarContainer>
      </>
   );
};
