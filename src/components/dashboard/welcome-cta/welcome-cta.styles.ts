import styled from '@emotion/styled';

export const Container = styled.div`
   background-color: #d5dde0;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   height: 60px;
   border-radius: 20px;

   @media (min-width: 600px) {
      grid-column: 1 / 6;
   }

   @media (min-width: 1024px) {
      grid-column: 1 / 8;
   }
`;

export const Title = styled.h1`
   font-size: 24px;
   font-weight: 600;
   color: #000;
   font-family: 'Comfortaa', sans-serif;
`;

export const Greeting = styled.h3`
   font-size: 16px;
   font-weight: 400;
   color: #000;
   font-family: 'Roboto', sans-serif;
`;

export const NotificationIcon = styled.div`
   background-color: #cfd6c1;
   border-radius: 50%;
   padding: 10px;
   width: 30px;
   height: 30px;
`;
