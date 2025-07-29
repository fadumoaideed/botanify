import styled from '@emotion/styled';

export const Container = styled.div`
   background-color: #d5dde0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: start;
   padding: 20px;
   border-radius: 10px;
   grid-column: 1 / -1;
   grid-row: 2 / 3;
   gap: 20px;

   @media (min-width: 600px) {
      flex-direction: row;
      grid-column: 6 / 9;
      grid-row: 1 / 5;
   }

   @media (min-width: 1024px) {
      grid-column: 8 / 13;
   }
`;
