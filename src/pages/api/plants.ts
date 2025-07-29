import { NextApiResponse } from 'next';
import { Plant } from '@/types/plant';
import { NextApiRequest } from 'next';
import path from 'path';
import fs from 'fs/promises';
import { plantDatabase } from '@/data/plants-database';

/**
 * Paginated response from a local plant database
 */
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

export default async function getAllPlantsHandler(
   req: NextApiRequest,
   res: NextApiResponse<PaginatedResponse | { error: string }>
) {
   if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
   }

   try {
      // Get pagination parameters from query string using offset pagination (static data so offset is fine)
      const pageNumber = parseInt(req.query.pageNumber as string) || 1;
      const pageSize = parseInt(req.query.pageSize as string) || 15;

      // Validate pagination parameters
      if (pageNumber < 1 || pageSize < 1 || pageSize > 100) {
         return res.status(400).json({
            error: 'Invalid pagination parameters. PageNumber must be >= 1, pageSize must be between 1 and 100'
         });
      }

      // Calculate pagination values
      const totalItems = plantDatabase.length;
      const totalPages = Math.ceil(totalItems / pageSize);
      const startIndex = (pageNumber - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      // Check if page exists
      if (pageNumber > totalPages && totalItems > 0) {
         return res.status(404).json({
            error: `Page ${pageNumber} not found. Total pages: ${totalPages}`
         });
      }

      // Get the paginated plants
      const paginatedPlants = plantDatabase.slice(startIndex, endIndex);

      // Prepare response
      const response: PaginatedResponse = {
         plants: paginatedPlants,
         pagination: {
            currentPage: pageNumber,
            totalPages,
            totalItems,
            itemsPerPage: pageSize,
            hasNextPage: pageNumber < totalPages,
            hasPreviousPage: pageNumber > 1
         }
      };

      res.status(200).json(response);
   } catch (error) {
      console.error('Error reading plants data:', error);
      res.status(500).json({ error: 'Internal server error' });
   }
}
