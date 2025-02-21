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
   const [isMobile, setIsMobile] = useState(false)

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

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 768)
      }
      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   return isAuthenticated ? (
      <>
         <Link href="/dashboard" passHref>
            Dashboard
         </Link>
         <Link href="/plant-care" passHref>
            Plant Care
         </Link>

         {isMobile ? (
            <>
               <Link href="#" onClick={logout} passHref>
                  Log out
               </Link>
            </>
         ) : (
            <div
               style={{ position: 'relative', marginLeft: '30px' }}
               ref={dropdownRef}
            >
               <UserIconContainer onClick={toggleDropdown}>
                  <UserIcon>{user?.firstName?.split('')[0]}</UserIcon>
               </UserIconContainer>

               {dropdownOpen && (
                  <DropDownMenu>
                     <div onClick={logout}>Log out</div>
                  </DropDownMenu>
               )}
            </div>
         )}
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
