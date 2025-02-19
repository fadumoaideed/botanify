import { createClient } from '@supabase/supabase-js'
import { User } from '@/types/users'

const supabase = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL!,
   process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
)

export interface AuthResponse {
   user?: User | null
   token: string | null
   error?: string
}

export const authService = {
   async login(email: string, password: string): Promise<AuthResponse> {
      try {
         if (process.env.ENV === 'production') {
            const {
               data: { user, session },
               error
            } = await supabase.auth.signInWithPassword({
               email,
               password
            })

            if (error) return { user: null, token: null, error: error.message }

            return {
               token: session?.access_token ?? null,
               user: user
                  ? {
                       id: user?.id,
                       email: user?.email ?? '',
                       firstName: user?.user_metadata?.first_name,
                       lastName: user?.user_metadata?.last_name,
                       createdAt: user?.created_at
                    }
                  : null
            }
         } else {
            const response = await fetch('/api/login', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ email, password })
            })
            return await response.json()
         }
      } catch (error) {
         return { user: null, token: null, error: 'Authentication failed' }
      }
   },

   async signup(userData: {
      email: string
      password: string
      firstName: string
      lastName: string
   }): Promise<AuthResponse> {
      try {
         if (process.env.ENV === 'production') {
            const { data, error } = await supabase.auth.signUp({
               email: userData.email,
               password: userData.password,
               options: {
                  data: {
                     first_name: userData.firstName,
                     last_name: userData.lastName
                  }
               }
            })

            if (error) return { user: null, token: null, error: error.message }

            return {
               token: data.session?.access_token ?? null,
               user: data.user
                  ? {
                       id: data.user.id,
                       email: data.user.email ?? '',
                       firstName: userData.firstName,
                       lastName: userData.lastName,
                       createdAt: data.user.created_at
                    }
                  : null
            }
         } else {
            const response = await fetch('/api/signup', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(userData)
            })
            return await response.json()
         }
      } catch (error) {
         return { user: null, token: null, error: 'Registration failed' }
      }
   },

   async logout(): Promise<void> {
      if (process.env.ENV === 'production') {
         await supabase.auth.signOut()
      }
      localStorage.removeItem('token')
      localStorage.removeItem('user')
   }
}
