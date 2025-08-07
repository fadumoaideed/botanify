import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
   UserIcon,
   Text,
   DropDownMenu,
   UserIconContainer
} from './navbar.styles';
import { useAuth } from '../../hooks/auth-context';

export const NavbarLinks = () => {
   const { isAuthenticated, logout, user } = useAuth();
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const dropdownRef = useRef<HTMLDivElement>(null);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setDropdownOpen(false);
         }
      };

      const handleEscapeKey = (event: KeyboardEvent) => {
         if (event.key === 'Escape' && dropdownOpen) {
            setDropdownOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
         document.removeEventListener('keydown', handleEscapeKey);
      };
   }, [dropdownOpen]);

   const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
   };

   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
         e.preventDefault();
         toggleDropdown();
      }
   };

   const handleLogoutKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
         e.preventDefault();
         logout();
      }
   };

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 768);
      };
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return isAuthenticated ? (
      <>
         <Link href="/plant-care" passHref>
            Plant Care
         </Link>
         <Link href="/dashboard" passHref>
            Dashboard
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
               <UserIconContainer
                  onClick={toggleDropdown}
                  onKeyDown={handleKeyDown}
                  role="button"
                  tabIndex={0}
                  aria-label={`User menu for ${user?.firstName || 'user'}`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="menu"
               >
                  <UserIcon>{user?.firstName?.split('')[0]}</UserIcon>
               </UserIconContainer>

               {dropdownOpen && (
                  <DropDownMenu role="menu" aria-label="User actions">
                     <div
                        onClick={logout}
                        onKeyDown={handleLogoutKeyDown}
                        role="menuitem"
                        tabIndex={0}
                        aria-label="Log out of your account"
                     >
                        Log out
                     </div>
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
   );
};
