import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs/promises';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method !== 'POST') {
      return res.status(405).end();
   }

   try {
      const { firstName, lastName, email, password } = req.body;

      // Development: Use JSON Server
      const jsonDirectory = path.join(process.cwd(), 'src/json-server');
      const fileContents = await fs.readFile(
         jsonDirectory + '/users-db.json',
         'utf8'
      );
      const data = JSON.parse(fileContents);

      // Check if user already exists
      const existingUser = data.users.find((user: any) => user.email === email);
      if (existingUser) {
         return res.status(400).json({ message: 'User already exists' });
      }

      // Create a new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
         id: Date.now().toString(),
         firstName,
         lastName,
         email,
         password: hashedPassword,
         createdAt: new Date().toISOString()
      };

      // Add user to array and write back to file
      data.users.push(newUser);
      await fs.writeFile(
         jsonDirectory + '/users-db.json',
         JSON.stringify(data, null, 2)
      );

      const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET!, {
         expiresIn: '3h'
      });

      res.status(201).json({
         message: 'User registered successfully',
         token
      });
   } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
   }
}
