import styled from '@emotion/styled';

export const DashboardContainer = styled.div`
   display: grid;
   grid-auto-flow: row;
   grid-column-gap: 1.5rem;
   grid-template: auto / repeat(1, 1fr);
   height: 800px;
   width: 100%;
   margin-left: auto;
   margin-right: auto;

   @media (min-width: 668px) {
      grid-column-gap: 2rem;
      grid-template: auto / repeat(8, 1fr);
   }

   @media (min-width: 1024px) {
      grid-template: auto / repeat(10, 1fr);
   }
`;
