import { NextApiResponse } from 'next'
import { Plant } from '@/types/plant'
import { NextApiRequest } from 'next'
import path from 'path'
import fs from 'fs/promises'

export default async function getAllPlantsHandler(
   req: NextApiRequest,
   res: NextApiResponse<Plant[]>
) {
   if (req.method !== 'GET') {
      return res.status(405).end()
   }

   try {
      // Get the path to the JSON file
      const jsonDirectory = path.join(process.cwd(), 'src/json-server')
      // Read the JSON file
      const fileContents = await fs.readFile(
         jsonDirectory + '/plants-db.json',
         'utf8'
      )
      // Parse the JSON data
      const data = JSON.parse(fileContents)

      // Send the plants array as response
      res.status(200).json(data.plants)
   } catch (error) {
      console.error('Error reading plants data:', error)
      res.status(500).json([])
   }
}
