/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link'
import {
   Burger,
   Logo,
   MobileNavLinks,
   NavLinks,
   NavbarContainer,
   navBarSize
} from './navbar.styles'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'
import { useAuth } from '../../hooks/auth-context'

export const Navbar = () => {
   const [nav, setNav] = useState(false)
   const { isAuthenticated, logout, user } = useAuth()
   const toggleNav = () => {
      setNav(!nav)
   }

   const Links = () => {
      return isAuthenticated ? (
         <>
            <Link href="/plant-care" passHref>
               Plant Care
            </Link>
            <Link href="/login" passHref>
               Hello, {user?.firstName}
            </Link>
            <Link href="/login" passHref onClick={logout}>
               Log out
            </Link>
         </>
      ) : (
         <>
            <Link href="/plant-care" passHref>
               Plant Care
            </Link>
            <Link href="/login" passHref>
               Log in
            </Link>
         </>
      )
   }

   return (
      <>
         <NavbarContainer>
            <Link href="/" passHref>
               {' '}
               <Logo>
                  <img alt={'Logo image of a leaf'} src={'images/logo.png'} />
                  <h1> botanify</h1>
               </Logo>{' '}
            </Link>
            <NavLinks>
               <Links />
            </NavLinks>
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
               <Links />
            </MobileNavLinks>
         </NavbarContainer>
      </>
   )
}
