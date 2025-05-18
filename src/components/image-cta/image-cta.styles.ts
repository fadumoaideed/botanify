import styled from '@emotion/styled';

export const Image = styled.img`
   border-radius: 30px;
`;
export const Container = styled.div`
   display: flex;
   box-sizing: border-box;
   flex-direction: column;
   padding: 20px;
   margin-bottom: 20px;

   @media (min-width: 600px) {
      padding: 20px;
   }

   @media (min-width: 800px) {
      padding: 0 50px;
      margin-bottom: 50px;
   }

   @media (min-width: 960px) {
      padding: 0 80px;
   }
`;
