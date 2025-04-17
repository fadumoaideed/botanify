import styled from '@emotion/styled'

export const Container = styled.div`
   display: flex;
   width: 100%;
   border: 1px solid red;
   flex-direction: column;
   margin: 0 20px;

   @media (min-width: 800px) {
      flex-direction: row;
   }
`

export const Image = styled.img`
   object-fit: cover;
   aspect-ratio: 1/1;
   border-radius: 30px;
   height: 100%;
   width: 100%;

   @media (min-width: 375px) {
      aspect-ratio: 16/9;
   }

   @media (min-width: 600px) {
      aspect-ratio: 16/9;
   }

   @media (min-width: 800px) {
      height: 500px;
      width: 500px;
   }

   @media (min-width: 960px) {
      height: 600px;
      width: 600px;
   }

   @media (min-width: 1200px) {
      height: 700px;
      width: 700px;
   }
`

export const Content = styled.p`
   font-size: 2rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
`

export const Heading = styled.p`
   font-size: 2rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
`

export const SubHeading = styled.p`
   font-size: 1rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
`

export const IconContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`
export const Text = styled.p`
   font-size: 1rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
`

export const Button = styled.button`
   color: rgb(152, 164, 157);
   border-radius: 10px;
   border: 1px solid rgb(148, 173, 158);
   padding: 10px 20px;
   font-size: 1rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
`
