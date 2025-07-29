import styled from '@emotion/styled';

export const HeroCtaContainer = styled.div`
   margin-top: 50px;
   margin-bottom: 10px;
   max-width: 100%;
   width: 100%;
   box-sizing: border-box;
   display: flex;
   justify-content: center;
   align-items: center;

   padding: 0 10px;

   @media (min-width: 425px) {
      padding: 0 20px;
   }

   @media (min-width: 800px) {
      padding: 0 50px;
      margin-top: 70px;
      margin-bottom: 50px;
   }
   @media (min-width: 960px) {
      padding: 0 80px;
   }
`;

export const Grid = styled.div`
   display: grid;
   gap: 20px;
   width: 100%;
   justify-items: center;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-template-areas:
      'a a a a a'
      'b b b b b'
      'c c c c c';

   @media (min-width: 960px) {
      grid-template-rows: repeat(4, 80px);
      grid-template-areas:
         'a a a b b'
         'a a a b b'
         'a a a c c'
         'a a a c c';
   }
`;

export const GridItem = styled.div<{ gridArea: 'a' | 'b' | 'c' }>`
   width: 100%;
   height: 100%;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: bold;
   grid-area: ${({ gridArea }) => gridArea};

   @media (min-width: 900px) and (max-width: 959px) {
      width: 800px;
   }

   ${({ gridArea }) => {
      switch (gridArea) {
         case 'a':
            return `
               position: relative;
               color: #192831;
               background-color: #ead9cf;
         
               &::before {
                  content: '';
                  position: absolute;
                  clip-path: path('M 0 0 C 103 353 338 403 800 199 L 800 98 C 407 327 147 251 103 -0 L 0 0');
                  background-color: #e6b496;
                  left: 0%;
                  top: 0%;
                  width: 100%;
                  height: 100%;
                  z-index: 1;
            
               }
        `;
         case 'b':
            return `
               position: relative;
               color: #cbd6dd;
               background-color: #153135;

               &::before {
                  content: '';
                  position: absolute;
                  clip-path: path('M 416 442 C 421 245 425 89 811 102 L 811 6 C 438 38 393 66 297 442 L 416 442');
                  background-color: #2e5b62;
                  left: 0%;
                  top: 0%;
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
               }

               @media (min-width: 960px) {

               &::before {
                  clip-path: path('M 206 450 C 191 155 341 72 849 126 L 839 0 C 264 0 167 19 66 450 L 70 450');
               }
               }
        `;
         case 'c':
            return `
               position: relative;
               color: #192831;
               background-color: #e6eae3;

               &::before {
                     content: '';
                     position: absolute;
                     clip-path: path('M 0 101 C 82 199 312 469 878 522 L 878 396 C 796 396 428 454 0 9 L -2 5');
                     background-color: #c2d4b5;
                     left: 0%;
                     top: 0%;
                     width: 100%;
                     height: 100%;
                     overflow: hidden;
               }
               
        `;
      }
   }}
`;

export const Title = styled.h3`
   font-weight: 700;
   font-family: 'Comfortaa', cursive;
   text-align: center;
   font-size: 0.9rem;
   opacity: 1;
   transition: opacity 0.5s ease-in-out;

   @media (min-width: 480px) {
      font-size: 1rem;
   }

   @media (min-width: 600px) {
      font-size: 1.5rem;
   }

   @media (min-width: 800px) and (max-width: 959px) {
      font-size: 2rem;
   }

   /* Target the third Title */
   &:nth-of-type(3) {
      align-items: flex-start;
   }
`;

export const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
   justify-content: center;
   text-align: center;
   max-width: 350px;
   z-index: 2;

   @media (min-width: 600px) {
      padding: 10px;
   }
`;

export const Subtitle = styled.h4`
   font-size: 16px;
   font-weight: normal;
   font-family: 'Roboto', sans-serif;
   font-size: 0.7rem;
   width: 200px;
   opacity: 1;
   transition: opacity 0.5s ease-in-out;

   @media (min-width: 480px) {
      font-size: 0.8rem;
   }

   @media (min-width: 600px) {
      margin-top: 10px;
   }

   @media (min-width: 800px) and (max-width: 959px) {
      font-size: 1.5rem;
      width: 350px;
   }
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 100%;
   box-sizing: border-box;
   padding: 10px;
   gap: 10px;
   width: 100%;

   @media (min-width: 360px) {
      flex-direction: row;
      align-items: flex-start;
   }

   @media (min-width: 960px) {
      gap: 0px;
   }

   /* Target the third section's Title */
   &:nth-of-type(3) ${Title} {
      text-align: left;
      width: 100%;
      padding-left: 20px;
   }

   > *:only-child {
      ${Title} {
         font-size: 1.2rem;
      }
      ${Subtitle} {
         width: 250px;
      }

      @media (min-width: 800px) and (max-width: 959px) {
         ${Title} {
            font-size: 2rem;
         }
         ${Subtitle} {
            width: 400px;
         }
      }

      @media (min-width: 960px) {
         ${Title} {
            font-size: 1.2rem;
         }
         ${Subtitle} {
            width: 300px;
         }
      }
   }
`;

export const StyledImage = styled.img`
   height: 180px;
   z-index: 2;

   @media (min-width: 480px) {
      height: 240px;
   }

   @media (min-width: 800px) {
      height: 280px;
   }

   @media (min-width: 960px) {
      height: 350px;
   }

   &:nth-child(1) {
      align-self: center;

      @media (min-width: 360px) {
         align-self: flex-end;
      }
   }

   @media (min-width: 960px) {
      &:nth-child(1) {
         align-self: center;
      }
   }
`;

export const Button = styled.button`
   background-color: transparent;
   border: 1px solid black;
   color: #192831;
   border-radius: 20px;
   font-family: 'Roboto', sans-serif;
   font-weight: 500;
   margin: 20px;
   width: 90px;
   height: 25px;
   font-size: 0.7rem;

   @media (min-width: 600px) {
      width: 160px;
      height: 40px;
      font-size: 1rem;
   }
`;

export const Calendar = styled.div`
   font-size: 60px;
   border: 0.07em solid white;
   height: 0.8em;
   width: 0.9em;
   border-radius: 0.04em;
   box-shadow: inset 0 0.2em 0 0.01em white;
   position: relative;

   &::before {
      position: absolute;
      content: '';
      background-color: white;
      height: 0.09em;
      width: 0.07em;
      border-radius: 0.18em 0.18em 0 0;
      top: -0.16em;
      left: 0.08em;
      box-shadow: 0.67em 0 0 0 white;
   }

   &::after {
      position: absolute;
      content: '';
      inset: 0;
      background: inherit;
      border: inherit;
      border-radius: inherit;
      box-shadow: inherit;
      transform-origin: top;
      // animation: flipCalendar 4s forwards;
   }

   @keyframes flipCalendar {
      0% {
         transform: rotateX(0deg);
         opacity: 1;
      }
      100% {
         transform: rotateX(-180deg);
         opacity: 0;
      }
   }

   @media (min-width: 960px) {
      font-size: 80px;
   }
`;

export const CalendarSpan = styled.span`
   position: absolute;
   content: '';
   background-color: white;
   height: 0.14em;
   width: 0.14em;
   top: 0.31em;
   left: 0.12em;
   animation: dotAnimation 4s forwards;

   @keyframes dotAnimation {
      0%,
      100% {
         box-shadow: 0.26em 0 0 0 white, 0.52em 0 0 0 white, 0 0.25em 0 0 white,
            0.26em 0.25em 0 0 white;
      }
      20% {
         box-shadow: 0.26em 0 0 0 #f27979, 0.52em 0 0 0 white,
            0 0.25em 0 0 white, 0.26em 0.25em 0 0 white;
      }
      40% {
         box-shadow: 0.26em 0 0 0 white, 0.52em 0 0 0 #f27979,
            0 0.25em 0 0 white, 0.26em 0.25em 0 0 white;
      }
      60% {
         box-shadow: 0.26em 0 0 0 white, 0.52em 0 0 0 white,
            0 0.25em 0 0 #f27979, 0.26em 0.25em 0 0 white;
      }
      80% {
         box-shadow: 0.26em 0 0 0 white, 0.52em 0 0 0 white, 0 0.25em 0 0 white,
            0.26em 0.25em 0 0 #f27979;
      }
   }
`;

export const CalendarContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 100%;
   z-index: 2;
   box-sizing: border-box;
   perspective: 1000px; // Added this for the 3D effect
`;

export const IconWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 15px;
   color: rgb(58, 81, 62);

   svg {
      width: 50px;
      height: 50px;

      @media (min-width: 800px) {
         width: 40px;
         height: 40px;
      }

      @media (min-width: 1024px) {
         width: 50px;
         height: 50px;
      }
   }
`;
