import styled from '@emotion/styled';

export const navBarSize = '70px';
interface NavLinksProps {
  open: boolean;
}

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
  }
  
  a:hover {
    /* TODO: Animation  */
  }
  @media (max-width: 768px) {
    flex: 1;
  }
`;

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
`;

export const MobileNavLinks = styled.div<NavLinksProps>`
  display: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 20px;
  background: #f7f6f7;
  top: ${navBarSize};
  position: absolute;
  z-index: 10;

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
`;

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

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: black;
    padding: 0 30px 0 0;
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
`;
