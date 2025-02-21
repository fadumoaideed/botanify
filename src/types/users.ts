export interface User {
   id?: string
   firstName: string
   lastName: string
   email: string
   password?: string
   createdAt?: string | undefined
}

export interface AuthResponse {
   user: User
   token: string
}
