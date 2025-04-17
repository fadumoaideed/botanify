import styled from '@emotion/styled'

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   border-radius: 10px 0 10px 10px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   margin: 0 15px;

   @media (min-width: 375px) {
      margin: 0 20px;
   }

   @media (min-width: 600px) {
      margin: 0 20px;
   }

   @media (min-width: 800px) {
      margin: 0 20px;
   }

   @media (min-width: 960px) {
      margin: 0 20px;
   }

   @media (min-width: 1200px) {
      margin: 0 20px;
   }
`
export const CardImage = styled.img`
   object-fit: cover;
   border-radius: 10px;

   @media (min-width: 375px) {
      aspect-ratio: 1/1;
   }

   @media (min-width: 600px) {
      aspect-ratio: 1/1;
   }

   @media (min-width: 800px) {
      aspect-ratio: 1/1;
   }

   @media (min-width: 960px) {
      aspect-ratio: 1/1;
   }
`

export const Title = styled.h3`
   padding: 10px;
   font-size: 1.3rem;
   font-weight: 300;
   font-family: Roboto, sans-serif;
   margin-bottom: 1rem;
   color: rgb(58, 81, 62);
`
