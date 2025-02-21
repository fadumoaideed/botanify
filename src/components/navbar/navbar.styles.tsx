import styled from '@emotion/styled'

export const navBarSize = '60px'

interface NavLinksProps {
   open: boolean
}

export const Text = styled.div`
   font-family: Verdana, sans-serif;
   font-size: 1rem;
`
export const DropDownMenu = styled.div`
   margin-top: 10px;
   position: absolute;
   top: 100%;
   right: 0;
   background: white;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   border-radius: 4px;
   padding: 8px;
   min-width: 120px;
   z-index: 100;

   div {
      cursor: pointer;
      padding: 8px;
   }
`

export const UserIconContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
   cursor: 'pointer';
`

export const UserIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 30px;
   height: 30px;
   background-color: #32a585;
   color: white;
   border-radius: 50%;
`

export const Logo = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 0 0 0 10px;

   img {
      text-decoration: none;
      color: black;
      height: ${navBarSize};
   }

   h1 {
      padding: 0 0 0 10px;
      font-size: 1.3rem;
   }

   @media (max-width: 768px) {
      h1 {
         font-size: 1rem;
      }
      img {
         height: 70px;
      }
   }

   a:hover {
      /* TODO: Animation  */
   }
   @media (max-width: 768px) {
      flex: 1;
   }
`

export const Burger = styled.div`
   display: none;
   font-size: 1.5rem;
   height: ${navBarSize};
   @media (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 10px 0 0;
   }
`

export const MobileNavLinks = styled.div<NavLinksProps>`
   display: none;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   padding: 20px;
   background: #f7f6f7;
   top: ${navBarSize};
   position: absolute;
   z-index: 100;

   li {
      color: black;
      font-family: 'Comfortaa', cursive;
      padding: 15px 0 5px 10px;
      :hover {
         text-decoration: underline;
         text-decoration-thickness: 2px;
         text-decoration-color: #32a585;
         text-underline-offset: 7px;
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      display: ${({ open }) => (open ? 'flex' : 'none')};
   }
`

export const NavbarContainer = styled.nav`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
   /* padding: 1rem; */
   background-color: #f7f6f7;
   color: black;
   height: ${navBarSize};

   li {
      list-style: none;
   }

   a {
      text-decoration: none;
      color: black;
      font-family: 'Comfortaa', cursive;
   }

   ${Logo} {
      flex: 2;
   }
   ${Burger} {
      flex: 1;
   }
   ${MobileNavLinks} {
      flex-basis: 100%;
      font-family: Verdana, sans-serif;
   }

   @media (max-width: 600px) {
      flex-direction: row;
      align-items: flex-start;
   }

   @media (min-width: 601px) {
      height: 75px;
   }
`

export const NavLinksContainer = styled.div`
   display: flex;
   gap: 1rem;
   margin: 0 30px;
   font-family: Verdana, sans-serif;

   a {
      text-decoration: none;
      color: black;
      font-family: Verdana, sans-serif;

      :hover {
         text-decoration: underline;
         text-decoration-thickness: 2px;
         text-decoration-color: #32a585;
         text-underline-offset: 7px;
      }
   }

   @media (max-width: 768px) {
      display: none;
   }
`
