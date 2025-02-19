import {
   createContext,
   useContext,
   useState,
   useEffect,
   ReactNode
} from 'react'
import { useRouter } from 'next/router'
import { User } from '@/types/users'
import { authService } from '@/services/auth.service'

interface AuthContextType {
   isAuthenticated: boolean
   user: User | null
   login: (email: string, password: string) => Promise<string | null>
   signup: (userData: {
      email: string
      password: string
      firstName: string
      lastName: string
   }) => Promise<string | null>
   logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

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

   const login = async (email: string, password: string) => {
      const { user, token, error } = await authService.login(email, password)

      if (error || !token || !user) return error || 'Login failed'

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      setIsAuthenticated(true)
      setUser(user)
      router.push('/dashboard')
      return null
   }

   const signup = async (userData: {
      email: string
      password: string
      firstName: string
      lastName: string
   }) => {
      const { error } = await authService.signup(userData)
      if (error) return error

      router.push('/login')
      return null
   }

   const logout = async () => {
      await authService.logout()
      setIsAuthenticated(false)
      setUser(null)
      router.push('/')
   }

   return (
      <AuthContext.Provider
         value={{ isAuthenticated, user, login, signup, logout }}
      >
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   const context = useContext(AuthContext)
   if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider')
   }
   return context
}
