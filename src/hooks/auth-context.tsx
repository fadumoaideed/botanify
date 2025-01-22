import {
   createContext,
   useContext,
   useState,
   useEffect,
   ReactNode
} from 'react'
import { useRouter } from 'next/router'

interface AuthContextType {
   isAuthenticated: boolean
   login: (token: string) => void
   logout: () => void
   user: any | null
   router: any | null
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
   const [user, setUser] = useState(null)
   const router = useRouter()

   useEffect(() => {
      // Check if token exists on mount
      const token = localStorage.getItem('token')
      if (token) {
         setIsAuthenticated(true)
         // TODO: Fetch user data using token
      }
   }, [])

   const login = (token: string) => {
      localStorage.setItem('token', token)
      setIsAuthenticated(true)
      // setUser({})
      router.push('/dashboard')
   }

   const logout = () => {
      localStorage.removeItem('token')
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
