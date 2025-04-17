import styled from '@emotion/styled'

export const HeroCtaContainer = styled.div`
   //   position: relative;
   margin-top: 50px;
   margin-bottom: 50px;
   max-width: 100%;
   width: 100%;
   box-sizing: border-box;
   display: flex;
   justify-content: center;
   align-items: center;

   @media (min-width: 375px) {
      padding: 0 10px;
   }

   @media (min-width: 425px) {
      padding: 0 20px;
   }

   @media (min-width: 600px) {
      padding: 0 50px;
      margin-top: 70px;
   }

   @media (min-width: 960px) {
      padding: 0 80px;
   }
`

export const Grid = styled.div`
   display: grid;
   gap: 20px;
   width: 100%;

   grid-template-rows: repeat(3, 220px);
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
`

export const GridItem = styled.div<{ gridArea: 'a' | 'b' | 'c' }>`
   width: 100%;
   height: 100%;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: bold;
   //   overflow: hidden;
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
        `
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
        `
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
        
        `
      }
   }}
`

export const Content = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 100%;
   z-index: 2;
   box-sizing: border-box;
   padding: 10px;
`

export const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
   justify-content: center;
   text-align: center;

   @media (min-width: 600px) {
      padding: 10px;
   }
`

export const Title = styled.h3`
   font-weight: 700;
   font-family: 'Comfortaa', cursive;
   text-align: center;

   @media (max-width: 375px) {
      font-size: 0.9rem;
   }

   @media (min-width: 600px) {
      font-size: 1.5rem;
   }
`

export const Subtitle = styled.h4`
   font-size: 16px;
   font-weight: normal;
   font-family: 'Roboto', sans-serif;

   @media (max-width: 375px) {
      font-size: 0.7rem;
   }

   @media (min-width: 600px) {
      margin-top: 10px;
   }
`

export const StyledImage = styled.img`
   height: 200px;

   @media (min-width: 375px) {
      height: 240px;
   }

   @media (min-width: 800px) {
      height: 280px;
   }

   @media (min-width: 960px) {
      height: 250px;
   }

   &:nth-child(1) {
      align-self: flex-end;
   }

   @media (min-width: 960px) {
      &:nth-child(1) {
         align-self: center;
      }
   }
`

export const Button = styled.button`
   background-color: transparent;
   border: 1px solid black;
   color: #192831;
   border-radius: 20px;
   font-family: 'Roboto', sans-serif;
   font-weight: 500;
   margin: 20px;

   @media (max-width: 375px) {
      width: 90px;
      height: 25px;
      font-size: 0.7rem;
   }

   @media (min-width: 600px) {
      width: 160px;
      height: 40px;
      font-size: 1rem;
   }
`

export const Calendar = styled.div`
   font-size: 80px;
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
      animation: flipCalendar 4s forwards;
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
      font-size: 90px;
   }
`

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
`

export const CalendarContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 100%;
   z-index: 2;
   box-sizing: border-box;
   perspective: 1000px; // Added this for the 3D effect
`
