import {
   createContext,
   useContext,
   useState,
   useEffect,
   ReactNode
} from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'
import { User } from '@/types/users'

interface AuthContextType {
   isAuthenticated: boolean
   login: (token: string, userData: User) => void
   logout: () => void
   user: User | null
   router: any
}

const AuthContext = createContext<AuthContextType>({
   isAuthenticated: false,
   login: () => {},
   logout: () => {},
   user: null,
   router: null
})

export function AuthProvider({ children }: { children: ReactNode }) {
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   const [user, setUser] = useState<User | null>(null)
   const router = useRouter()

   useEffect(() => {
      // Check if token and user data exist on mount
      const token = localStorage.getItem('token')
      const savedUser = localStorage.getItem('user')
      if (token && savedUser) {
         setIsAuthenticated(true)
         setUser(JSON.parse(savedUser))
      }
   }, [])

   const login = async (token: string, userData: User) => {
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(userData))
      setIsAuthenticated(true)
      setUser(userData)
      router.push('/dashboard')
   }

   const logout = async () => {
      if (process.env.ENV === 'production') {
         const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
         )
         await supabase.auth.signOut()
         console.log('User signed out')
      }
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setIsAuthenticated(false)
      setUser(null)
      router.push('/')
   }

   return (
      <AuthContext.Provider
         value={{ isAuthenticated, login, logout, user, router }}
      >
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => useContext(AuthContext)
