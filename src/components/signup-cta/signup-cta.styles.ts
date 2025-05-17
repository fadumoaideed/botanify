import styled from '@emotion/styled';

export const Container = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   gap: 20px;
   margin-top: 30px;
   margin-bottom: 30px;
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-size: 2rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   gap: 10px;

   @media (min-width: 800px) {
      flex-direction: row;
      padding-left: 50px;
      padding-right: 50px;
      gap: 20px;
   }

   @media (min-width: 1024px) {
      gap: 30px;
   }
`;

export const IconContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;
export const Text = styled.p`
   font-size: 1rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
`;

export const SectionContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const Button = styled.button`
   color: rgb(58, 81, 62);
   margin: auto;
   width: 200px;
   border-radius: 30px;
   border: 1px solid rgb(58, 81, 62);
   padding: 10px 20px;
   font-size: 1rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   margin-top: 20px;
   align-self: flex-start;
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover {
      background-color: rgb(58, 81, 62);
      color: white;
   }
`;

export const FeatureRow = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 15px;
   border-radius: 15px;
   gap: 15px;
   transition: background-color 0.3s ease;

   &:hover {
      background-color: rgba(148, 173, 158, 0.1);
   }
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

export const FeatureText = styled.p`
   font-size: 1rem;
   font-weight: 400;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   margin: 0;
   line-height: 1.4;
   max-width: 300px;
   text-align: center;

   @media (min-width: 480px) {
      font-size: 1rem;
   }
   @media (min-width: 600px) {
      font-size: 1.1rem;
   }
   @media (min-width: 800px) {
      font-size: 1.2rem;
   }
`;

export const CTAContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 40px;

   @media (min-width: 800px) {
      flex-direction: row;
   }
`;

export const Heading = styled.h2`
   font-size: 2rem;
   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
`;
