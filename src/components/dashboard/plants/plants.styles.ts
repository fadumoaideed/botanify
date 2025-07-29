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
   grid-row: 3/4;
   gap: 20px;

   @media (min-width: 600px) {
      flex-direction: row;
      grid-column: 1/6;
      grid-row: 3 / 5;
   }

   @media (min-width: 1024px) {
      grid-column: 1 / 8;
   }
`;
