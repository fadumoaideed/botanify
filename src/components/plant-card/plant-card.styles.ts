import styled from '@emotion/styled';

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   border-radius: 10px 0 10px 10px;
   // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   margin: 0 15px;

   @media (min-width: 375px) {
      margin: 0 20px;
   }
`;

export const CardImage = styled.img`
   object-fit: fill;
   border-radius: 10px;
   aspect-ratio: 1/1;

   @media (min-width: 600px) {
      aspect-ratio: 1.1/1.2;
   }
`;

export const ImageContainer = styled.div`
   border-radius: 10px;
   overflow: hidden;
`;

export const Title = styled.h3`
   padding: 10px 0 0 0;
   font-size: 1.3rem;
   font-weight: 300;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
`;
