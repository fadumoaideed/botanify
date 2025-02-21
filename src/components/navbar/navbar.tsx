/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link'
import {
   Burger,
   Logo,
   MobileNavLinks,
   NavLinksContainer,
   NavbarContainer
} from './navbar.styles'
import { RxHamburgerMenu, RxPerson } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'
import { useAuth } from '../../hooks/auth-context'
import { NavbarLinks } from './navbar-links'

export const Navbar = () => {
   const [nav, setNav] = useState(false)
   const { isAuthenticated, logout, user } = useAuth()
   const toggleNav = () => {
      setNav(!nav)
   }

   return (
      <>
         <NavbarContainer>
            <Link href="/" passHref>
               <Logo>
                  <img alt={'Logo image of a leaf'} src={'images/logo.png'} />
                  <h1> botanify</h1>
               </Logo>
            </Link>
            <NavLinksContainer>
               <NavbarLinks />
            </NavLinksContainer>
            <Burger onClick={toggleNav}>
               {nav ? (
                  <RxCross1 style={{ fontSize: '30px', color: '#3b3b3b' }} />
               ) : (
                  <RxHamburgerMenu
                     style={{ fontSize: '30px', color: '#3b3b3b' }}
                  />
               )}
            </Burger>
            <MobileNavLinks open={nav}>
               <NavbarLinks />
            </MobileNavLinks>
         </NavbarContainer>
      </>
   )
}
