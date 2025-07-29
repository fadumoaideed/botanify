import { plantDatabase } from '@/data/plants-database';
import { Card } from '../components/plant-card/plant-card';
import { useState, useEffect } from 'react';
import { Plant } from '@/types/plant';
import {
   PlantsContainer,
   Container,
   Header,
   Title,
   SubTitle,
   Button,
   PaginationContainer,
   PageInfo,
   LoadingMessage,
   ErrorMessage,
   ErrorContainer,
   ErrorImage,
   ErrorTitle,
   ErrorDescription
} from '../styles/page/plant-care.styles';

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
   const [pagination, setPagination] = useState<
      PaginatedResponse['pagination']
   >({
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

   return (
      <Container>
         {loading && !error && (
            <LoadingMessage>Loading plants...</LoadingMessage>
         )}
         {error && (
            <ErrorContainer>
               <ErrorMessage>
                  <ErrorImage
                     src="/images/unwatered_plant.png"
                     alt="Unwatered Plant"
                  />
                  <ErrorTitle>Oops! Our plants need some water 🌱</ErrorTitle>
                  <ErrorDescription>
                     We&apos;re having trouble loading the plant care
                     information right now. Just like plants need water to
                     thrive, our servers need a moment to refresh. Please try
                     again in a moment!
                  </ErrorDescription>
                  <Button onClick={() => fetchPlants(1, 15)}>
                     Water the servers
                  </Button>
               </ErrorMessage>
            </ErrorContainer>
         )}
         {plants.length > 0 && !error && (
            <>
               <Header>
                  <Title>Plant care A-Z</Title>
                  <SubTitle>
                     Here you can find all the information you need to care for
                     your plants.
                  </SubTitle>
               </Header>
               <PlantsContainer>
                  {plants.map((plant) => (
                     <Card key={plant.id} plant={plant} />
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

                  <Button
                     onClick={handleNextPage}
                     disabled={!pagination.hasNextPage}
                  >
                     Next
                  </Button>
               </PaginationContainer>
            </>
         )}
      </Container>
   );
}
