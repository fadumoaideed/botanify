import styled from '@emotion/styled';

interface NavLinksProps {
  open: boolean;
}

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  a {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
  }
  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

export const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;
