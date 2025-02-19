import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs/promises'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createClient } from '@supabase/supabase-js'

// Api routes must be defaut exports because nextjs requires them to be named handler
export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method !== 'POST') {
      return res.status(405).end()
   }

   try {
      const { firstName, lastName, email, password } = req.body

      if (process.env.ENV === 'production') {
         console.log('HELLLLOOOO')
         // Production: Use Supabase
         const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
         )

         // Register user in Supabase Auth
         const { data, error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: {
               data: {
                  first_name: firstName,
                  last_name: lastName
               }
            }
         })

         if (authError) {
            console.log('Error during registration:', authError)
            return res.status(400).json({ message: authError.message })
         }

         return res.status(201).json({
            message: 'User registered successfully',
            token: data.session?.access_token
         })
      } else {
         // Development: Use JSON Server
         const jsonDirectory = path.join(process.cwd(), 'src/json-server')
         const fileContents = await fs.readFile(
            jsonDirectory + '/users-db.json',
            'utf8'
         )
         const data = JSON.parse(fileContents)

         // Check if user already exists
         const existingUser = data.users.find(
            (user: any) => user.email === email
         )
         if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
         }

         // Create a new user
         const hashedPassword = await bcrypt.hash(password, 10)
         const newUser = {
            id: Date.now().toString(),
            firstName,
            lastName,
            email,
            password: hashedPassword
         }

         // Add user to array and write back to file
         data.users.push(newUser)
         await fs.writeFile(
            jsonDirectory + '/users-db.json',
            JSON.stringify(data, null, 2)
         )

         const token = jwt.sign(
            { userId: newUser.id },
            process.env.JWT_SECRET!,
            {
               expiresIn: '3h'
            }
         )

         res.status(201).json({
            message: 'User registered successfully',
            token
         })
      }
   } catch (error) {
      console.log('Error registering user:', error)
      res.status(500).json({ message: 'Internal server error' })
   }
}
