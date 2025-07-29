import styled from '@emotion/styled';

export const PlantsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 40px;
   justify-items: center;
   width: 100%;

   @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 70px;
   }

   @media (min-width: 1500px) {
      grid-template-columns: repeat(4, 1fr);
   }
`;

export const Title = styled.h3`
   font-size: 2rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   margin-top: 20px;

   @media (min-width: 600px) {
      margin-top: 30px;
      font-size: 2.5rem;
   }

   @media (min-width: 800px) {
      margin-top: 50px;
      font-size: 3rem;
   }
`;

export const SubTitle = styled.p`
   font-size: 1rem;
   font-weight: 300;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);

   @media (min-width: 600px) {
      font-size: 1.3rem;
   }
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 10px;
`;

export const Header = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: center;
   margin: 20px 10px 50px 20px;
`;

export const Button = styled.button`
   background-color: transparent;
   color: #fff;
   padding: 8px 45px;
   border-radius: 30px;
   border: 1px solid rgb(58, 81, 62);
   cursor: pointer;
   font-size: 1rem;
   margin: 2rem 0;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   margin-top: 20px;
   align-self: center;

   &:hover {
      background-color: rgb(58, 81, 62);
      color: #fff;
   }

   &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: transparent;
      color: rgb(58, 81, 62);
   }
`;

export const PaginationContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   margin: 2rem 0;
   flex-wrap: wrap;
`;

export const PageInfo = styled.span`
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   font-size: 1rem;
   margin: 0 10px;
   text-align: center;
`;

export const LoadingMessage = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 200px;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   font-size: 1.2rem;
`;

export const ErrorMessage = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 3rem 2rem;
   text-align: center;
   max-width: 600px;
   margin: 2rem auto;
`;

export const ErrorContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 60vh;
   padding: 2rem;
`;

export const ErrorImage = styled.img`
   width: 300px;
   height: 300px;
   object-fit: cover;
   border-radius: 10px;
   margin-bottom: 2rem;
   opacity: 0.8;
   filter: grayscale(20%);

   @media (max-width: 768px) {
      width: 150px;
      height: 150px;
   }
`;

export const ErrorTitle = styled.h2`
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   font-size: 2rem;
   font-weight: 500;
   margin-bottom: 1rem;
   line-height: 1.3;

   @media (max-width: 768px) {
      font-size: 1.5rem;
   }
`;

export const ErrorDescription = styled.p`
   font-family: Roboto, sans-serif;
   color: rgb(100, 120, 100);
   font-size: 1.1rem;
   font-weight: 300;
   line-height: 1.6;
   max-width: 450px;

   @media (max-width: 768px) {
      font-size: 1rem;
   }
`;
