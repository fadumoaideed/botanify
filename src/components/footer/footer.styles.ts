import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
   background-color: #f7f6f7;
   padding: 3rem 0;
   margin-top: auto;
   font-family: Roboto, sans-serif;
   margin-top: 50px;
`;

export const FooterContent = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   padding: 0 1rem;
`;

export const FooterSections = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
   }
`;

export const FooterSection = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const FooterTitle = styled.h3`
   font-size: 1.125rem;
   font-weight: 600;
   color: #166534;
   margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
   color: #059669;
   text-decoration: none;
   transition: color 0.2s ease;

   &:hover {
      color: #166534;
   }
`;

export const SocialLinksContainer = styled.div`
   display: flex;
   gap: 1rem;
`;

export const SocialLink = styled.a`
   color: #059669;
   transition: color 0.2s ease;

   &:hover {
      color: #166534;
   }
`;

export const CopyrightContainer = styled.div`
   margin-top: 2rem;
   padding-top: 2rem;
   border-top: 1px solid #dcfce7;
   text-align: center;
   color: #059669;
`;
