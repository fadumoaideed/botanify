import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs/promises'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createClient } from '@supabase/supabase-js'

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method !== 'POST') {
      return res.status(405).end()
   }

   try {
      const { email, password } = req.body

      if (process.env.ENV === 'production') {
         console.log('HELLO PRODUCTION ENVIRONMENT')
         // Production: Use Supabase
         const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
         )

         const {
            data: { user, session },
            error
         } = await supabase.auth.signInWithPassword({
            email,
            password
         })

         if (error) {
            console.log('Error during login:', error)
            return res
               .status(401)
               .json({ message: 'Invalid email or password' })
         }
         console.log({ user })

         if (!user) {
            return res.status(404).json({ message: 'User data not found' })
         }

         return res.status(200).json({
            token: session?.access_token,
            user: {
               id: user?.id,
               email: user?.email,
               firstName: user?.user_metadata?.first_name,
               lastName: user?.user_metadata?.last_name,
               createdAt: user?.created_at
            }
         })
      } else {
         // Development: Use JSON Server
         const jsonDirectory = path.join(process.cwd(), 'src/json-server')
         const fileContents = await fs.readFile(
            jsonDirectory + '/users-db.json',
            'utf8'
         )
         const data = JSON.parse(fileContents)

         // Find user by email
         const user = data.users.find((u: any) => u.email === email)
         if (!user) {
            return res
               .status(401)
               .json({ message: 'Invalid email or password' })
         }

         // Compare passwords
         const isValidPassword = await bcrypt.compare(password, user.password)
         if (!isValidPassword) {
            return res
               .status(401)
               .json({ message: 'Invalid email or password' })
         }

         // Generate JWT token
         const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
            expiresIn: '3h'
         })

         return res
            .status(200)
            .json({ token, user: { firstName: user.firstName } })
      }
   } catch (error) {
      console.log('Error during login:', error)
      res.status(500).json({ message: 'Internal server error' })
   }
}
