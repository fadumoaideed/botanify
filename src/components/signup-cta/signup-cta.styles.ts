import styled from '@emotion/styled';

export const Container = styled.div`
   display: flex;
   width: 100%;
   gap: 20px;
   margin-bottom: 20px;
   box-sizing: border-box;
   @media (max-width: 768px) {
      align-items: center;
      flex-direction: column;
   }
`;

export const VideoContainer = styled.div`
   position: relative;
   border-radius: 12px;
   overflow: hidden;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   aspect-ratio: 1 / 1;
   line-height: 0;

   @supports not (aspect-ratio: 1 / 1) {
      height: 0;
   }

   @media (max-width: 768px) {
      flex: none;
      aspect-ratio: auto;
      @supports not (aspect-ratio: 16 / 9) {
         padding-bottom: 0;
         height: 300px;
      }
   }
`;

export const Video = styled.video`
   width: 300px;
   height: 300px;
   object-fit: cover;
   position: relative;
   top: 0;
   left: 0;
   border-radius: 30px;

   @media (min-width: 425px) {
      width: 500px;
      height: 500px;
   }
   @media (min-width: 768px) {
      width: 500px;
      height: 500px;
   }
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   flex-wrap: wrap;
`;

export const Title = styled.h2`
   font-size: 1.3rem;
   color: #2c3e50;
   margin-bottom: 1rem;
   font-family: 'Comfortaa', cursive;

   @media (min-width: 425px) {
      font-size: 1.5rem;
   }
   @media (min-width: 768px) {
      font-size: 2rem;
   }
   @media (min-width: 1024px) {
      font-size: 2.5rem;
   }
`;

export const Description = styled.p`
   font-size: 1rem;
   color: #666;
   line-height: 1.6;
   margin-bottom: 2rem;
   font-family: 'Roboto', sans-serif;

   @media (min-width: 425px) {
      font-size: 1.2rem;
   }
`;

export const Button = styled.button`
   background-color: transparent;
   color: #fff;
   padding: 8px 45px;
   border-radius: 30px;
   border: 1px solid rgb(58, 81, 62);
   cursor: pointer;
   font-size: 1rem;

   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   align-self: center;

   &:hover {
      background-color: rgb(58, 81, 62);
      color: #fff;
   }
`;
