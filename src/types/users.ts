export interface User {
   id: string
   firstName: string
   lastName: string
   email: string
   createdAt: string
}

export interface AuthResponse {
   user: User
   token: string
}
