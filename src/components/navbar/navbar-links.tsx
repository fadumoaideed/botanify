import { useState } from 'react'
import Link from 'next/link'
import {
   UserIcon,
   Text,
   DropDownMenu,
   UserIconContainer
} from './navbar.styles'
import { useAuth } from '../../hooks/auth-context'

export const NavbarLinks = () => {
   const { isAuthenticated, logout, user } = useAuth()

   const [dropdownOpen, setDropdownOpen] = useState(false)
   const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen)
   }

   return isAuthenticated ? (
      <>
         <Link href="/plant-care" passHref>
            Plant Care
         </Link>

         <div style={{ position: 'relative' }}>
            <UserIconContainer onClick={toggleDropdown}>
               <UserIcon>{user?.firstName?.split('')[0]}</UserIcon>
            </UserIconContainer>

            {dropdownOpen && (
               <DropDownMenu>
                  <div onClick={logout}>Log out</div>
               </DropDownMenu>
            )}
         </div>
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
