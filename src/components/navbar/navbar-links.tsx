import { useState, useRef, useEffect } from 'react'
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
   const dropdownRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setDropdownOpen(false)
         }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])

   const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen)
   }

   return isAuthenticated ? (
      <>
         <Link href="/plant-care" passHref>
            Plant Care
         </Link>

         <div style={{ position: 'relative' }} ref={dropdownRef}>
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
