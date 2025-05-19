import styled from '@emotion/styled';

export const OverlayContainer = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   backdrop-filter: blur(5px);
   z-index: 1;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

   > div {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      height: 500px;
      width: 600px;

      padding: 10px;
      background-color: #fff;
      border-radius: 30px;
   }
`;

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

   &:hover {
      transform: scale(1.1);
      transition: transform 0.4s ease-in-out;
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
