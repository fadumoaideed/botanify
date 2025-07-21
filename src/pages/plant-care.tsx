import { PlantCard } from '../components/plant-card/plant-card';
import { useState, useEffect } from 'react';
import { Plant } from '@/types/plant';
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
   justify-content: center;
   align-items: center;
   height: 200px;
   font-family: Roboto, sans-serif;
   color: #e74c3c;
   font-size: 1.2rem;
   text-align: center;
`;

interface PaginatedResponse {
   plants: Plant[];
   pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      itemsPerPage: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
   };
}

export default function PlantCare() {
   const [plants, setPlants] = useState<Plant[]>([]);
   const [pagination, setPagination] = useState({
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 15,
      hasNextPage: false,
      hasPreviousPage: false
   });
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   const fetchPlants = async (
      pageNumber: number = 1,
      pageSize: number = 16
   ) => {
      try {
         setLoading(true);
         setError(null);

         const response = await fetch(
            `/api/plants?pageNumber=${pageNumber}&pageSize=${pageSize}`
         );
         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch plants');
         }

         setPlants(data.plants);
         setPagination(data.pagination);
      } catch (error) {
         console.error('Error fetching plants:', error);
         setError(
            error instanceof Error ? error.message : 'Failed to fetch plants'
         );
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchPlants();
   }, []);

   const handlePreviousPage = () => {
      if (pagination.hasPreviousPage) {
         fetchPlants(pagination.currentPage - 1, pagination.itemsPerPage);
      }
   };

   const handleNextPage = () => {
      if (pagination.hasNextPage) {
         fetchPlants(pagination.currentPage + 1, pagination.itemsPerPage);
      }
   };

   if (loading) {
      return (
         <Container>
            <Header>
               <Title>Plant care A-Z</Title>
               <SubTitle>
                  Here you can find all the information you need to care for
                  your plants.
               </SubTitle>
            </Header>
            <LoadingMessage>Loading plants...</LoadingMessage>
         </Container>
      );
   }

   if (error) {
      return (
         <Container>
            <Header>
               <Title>Plant care A-Z</Title>
               <SubTitle>
                  Here you can find all the information you need to care for
                  your plants.
               </SubTitle>
            </Header>
            <ErrorMessage>
               Error: {error}
               <br />
               <Button onClick={() => fetchPlants(1, 15)}>Try Again</Button>
            </ErrorMessage>
         </Container>
      );
   }

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
            {plants.map((plant) => (
               <PlantCard key={plant.id} plant={plant} />
            ))}
         </PlantsContainer>

         <PaginationContainer>
            <Button
               onClick={handlePreviousPage}
               disabled={!pagination.hasPreviousPage}
            >
               Previous
            </Button>

            <PageInfo>
               Page {pagination.currentPage} of {pagination.totalPages}
               <br />
               Showing {plants.length} of {pagination.totalItems} plants
            </PageInfo>

            <Button onClick={handleNextPage} disabled={!pagination.hasNextPage}>
               Next
            </Button>
         </PaginationContainer>
      </Container>
   );
}
