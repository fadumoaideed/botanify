import { NextApiRequest, NextApiResponse } from 'next';

export default async function getMoisureData(
   req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      const response = await fetch(
         `https://babimjvuxtxesunjiagw.supabase.co/rest/v1/plant`,
         {
            headers: { apikey: process.env.SUPABASE_KEY as string }
         }
      );

      if (response.status !== 200) {
         return res.status(400).json({
            error: 'Failed to connect to port 3001'
         });
      }

      console.log('req.body', req.body);

      return response.json();
   } catch (error) {
      // Handle fetch error
      console.log('Error fetching moisure data', error);

      return error;
   }
}
