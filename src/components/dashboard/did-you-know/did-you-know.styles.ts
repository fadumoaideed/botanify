import styled from '@emotion/styled';

export const Container = styled.div`
   background-color: #d5dde0;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: start;
   padding: 20px;
   border-radius: 10px;
   grid-column: 1 / -1;
   gap: 10px;

   @media (min-width: 600px) {
      flex-direction: row;
      grid-column: 1/6;
      grid-row: 2 / 3;
      gap: 20px;
   }

   @media (min-width: 1024px) {
      grid-column: 1 / 8;
   }
`;
export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 10px;
`;

export const Title = styled.h1`
   font-size: 1rem;
   font-weight: 600;
   color: #000;
   font-family: 'Comfortaa', sans-serif;

   @media (min-width: 600px) {
      font-size: 1.3rem;
   }
`;

export const Fact = styled.p`
   font-size: 0.7rem;
   font-weight: 400;
   color: #000;
   font-family: 'Roboto', sans-serif;
   max-width: 300px;
   text-align: center;

   @media (min-width: 600px) {
      font-size: 0.8rem;
   }

   @media (min-width: 1024px) {
      font-size: 0.9rem;
   }
`;

export const ImageContainer = styled.div`
   border-radius: 7px;
   overflow: hidden;
   aspect-ratio: 1.2/1;
   height: 180px;
   max-width: 300px;
   img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1.2/1;
   }
`;
