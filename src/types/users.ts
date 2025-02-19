export interface User {
   id: string
   firstName: string
   lastName?: string
   email: string
   createdAt?: string
}

export interface SupabaseUser {
   id: string
   firstName: string
   lastName?: string
   email: string
   createdAt?: string
}

// If you need a separate type for authentication
export interface AuthResponse {
   user: User
   token: string
}
