import { plantDatabase } from '@/data/plants-database';
import { Card } from '../components/plant-card/plant-card';
import { useState, useEffect, useCallback } from 'react';
import { Plant } from '@/types/plant';
import { getErrorMessage } from '@/lib/get-error-message';
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
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const [pagination, setPagination] = useState<
      PaginatedResponse['pagination']
   >({
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 20,
      hasNextPage: false,
      hasPreviousPage: false
   });

   const fetchPlants = useCallback(async (page: number = 1) => {
      setLoading(true);
      setError('');
      try {
         const response = await fetch(`/api/plants?page=${page}`);
         if (!response.ok) {
            throw new Error('Failed to fetch plants');
         }
         const data = await response.json();
         setPlants(data.plants);
         setPagination(data.pagination);
      } catch (err) {
         setError(
            err instanceof Error ? err.message : 'Failed to fetch plants'
         );
      } finally {
         setLoading(false);
      }
   }, []);

   useEffect(() => {
      fetchPlants();
   }, [fetchPlants]);

   const handleNextPage = () => {
      if (pagination.hasNextPage) {
         fetchPlants(pagination.currentPage + 1);
      }
   };

   const handlePreviousPage = () => {
      if (pagination.hasPreviousPage) {
         fetchPlants(pagination.currentPage - 1);
      }
   };

   return (
      <Container>
         {loading && <div aria-live="polite">Loading plants...</div>}
         {error && (
            <ErrorContainer>
               <ErrorMessage role="alert" aria-live="polite">
                  <h2>Error loading plants</h2>
                  <p>{error}</p>
                  <button onClick={() => fetchPlants(pagination.currentPage)}>
                     Try again
                  </button>
               </ErrorMessage>
            </ErrorContainer>
         )}
         {plants.length > 0 && !error && (
            <>
               <Header>
                  <Title as="h1">Plant care A-Z</Title>
                  <SubTitle>
                     Here you can find all the information you need to care for
                     your plants.
                  </SubTitle>
               </Header>
               <PlantsContainer role="region" aria-label="Plant care guide">
                  {plants.map((plant) => (
                     <Card key={plant.id} plant={plant} />
                  ))}
               </PlantsContainer>
               <PaginationContainer
                  role="navigation"
                  aria-label="Plant pagination"
               >
                  <Button
                     onClick={handlePreviousPage}
                     disabled={!pagination.hasPreviousPage}
                     aria-label={`Go to previous page ${
                        pagination.currentPage - 1
                     }`}
                  >
                     Previous
                  </Button>

                  <PageInfo aria-live="polite">
                     Page {pagination.currentPage} of {pagination.totalPages}
                     <br />
                     Showing {plants.length} of {pagination.totalItems} plants
                  </PageInfo>

                  <Button
                     onClick={handleNextPage}
                     disabled={!pagination.hasNextPage}
                     aria-label={`Go to next page ${
                        pagination.currentPage + 1
                     }`}
                  >
                     Next
                  </Button>
               </PaginationContainer>
            </>
         )}
      </Container>
   );
}
