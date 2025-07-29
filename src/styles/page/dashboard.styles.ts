import styled from '@emotion/styled';

export const DashboardContainer = styled.div`
   margin-top: 1rem;
   display: grid;
   grid-auto-flow: row;
   grid-column-gap: 1.5rem;
   grid-template-columns: repeat(1, 1fr);
   grid-row-gap: 1rem;
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   padding: 0 1rem;
   box-sizing: border-box;

   @media (min-width: 600px) {
      grid-column-gap: 2rem;
      grid-template-columns: repeat(8, 1fr);
      padding: 0 1.5rem;
   }

   @media (min-width: 1024px) {
      margin-top: 2rem;
      grid-template-columns: repeat(12, 1fr);
   }
`;
