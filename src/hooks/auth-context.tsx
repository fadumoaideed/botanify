import {
   createContext,
   useContext,
   useState,
   useEffect,
   ReactNode
} from 'react';
import { useRouter } from 'next/router';
import { User } from '@/types/users';
import { AuthService } from '@/services/auth.service';

interface AuthContextType {
   isAuthenticated: boolean;
   user: User | null;
   login: (
      email: string,
      password: string
   ) => Promise<{ success?: boolean; error?: string }>;
   signup: (userData: User) => Promise<{ success?: boolean; error?: string }>;
   logout: () => Promise<{ success?: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState<User | null>(null);
   const router = useRouter();

   useEffect(() => {
      const checkSession = async () => {
         const { user } = await AuthService.getSession();
         if (user) {
            setIsAuthenticated(true);
            setUser(user);
         }
      };

      checkSession();
   }, []);

   const login = async (email: string, password: string) => {
      const { user, token, error } = await AuthService.login(email, password);

      console.log({ user, token, error });

      if (error) {
         return { error };
      }
      if (user && token) {
         setUser(user);
         setIsAuthenticated(true);
         router.push('/dashboard');
      }

      return { success: true };
   };

   const signup = async (userData: User) => {
      const { error } = await AuthService.signup(userData);
      if (error) {
         return { error };
      }
      return { success: true };
   };

   const logout = async () => {
      const { error } = await AuthService.logout();

      if (error) {
         return { error };
      }

      setIsAuthenticated(false);
      setUser(null);
      router.push('/');
      return { success: true };
   };

   return (
      <AuthContext.Provider
         value={{ isAuthenticated, user, login, signup, logout }}
      >
         {children}
      </AuthContext.Provider>
   );
}

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
   }
   return context;
};
