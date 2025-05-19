import { plantDatabase } from '@/data/plants-database';
import { Card } from '../components/plant-card/plant-card';
import { useState } from 'react';
import styled from '@emotion/styled';

const PlantsContainer = styled.div`
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

   @media (min-width: 1600px) {
      grid-template-columns: repeat(5, 1fr);
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
   align-items: start;
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
   margin-top: 20px;

   font-weight: 500;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   margin-top: 20px;
   align-self: center;

   &:hover {
      background-color: rgb(58, 81, 62);
      color: #fff;
   }
`;

export default function PlantCare() {
   const [visibleItems, setVisibleItems] = useState(15);

   const handleLoadMore = () => {
      setVisibleItems((prev) => prev + 15);
   };

   // TODO!: scape these images for infoor plant and alllow users to select from a drop down which plAN THEY HAVE. DONT ADD FEATURE IF THEY DONT HAVE IT YET
   return (
      <Container>
         <Header>
            <Title>Plant care A-Z</Title>
            <SubTitle>
               Here you can find all the information you need to care for your
               plants.
            </SubTitle>
         </Header>
         <PlantsContainer>
            {plantDatabase.slice(0, visibleItems).map((plant) => (
               <Card key={plant.id} plant={plant} />
            ))}
         </PlantsContainer>

         {visibleItems < plantDatabase.length && (
            <Button onClick={handleLoadMore}>Load More</Button>
         )}
      </Container>
   );
}
