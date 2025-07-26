import { createClient } from '@supabase/supabase-js';
import { User } from '@/types/users';
import { getErrorMessage } from '@/lib/get-error-message';
import { HTTP_STATUS } from '@/lib/https-status';

const supabase = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL!,
   process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
);

export interface AuthResponse {
   user?: User | null;
   token?: string | null;
   status?: number;
   error?: string;
}

// Auth Service to communicate with supabase
export const AuthService = {
   async login(email: string, password: string): Promise<AuthResponse> {
      try {
         const {
            data: { user, session },
            error
         } = await supabase.auth.signInWithPassword({
            email,
            password
         });

         if (error) {
            console.log('error', { error });
            console.log('error.code', error?.code);
            return {
               user: null,
               token: null,
               status: error?.status as number,
               error: getErrorMessage(error?.code as string)
            };
         }
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
         };
      } catch (error) {
         return {
            user: null,
            token: null,
            error: 'Login authentication failed',
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR
         };
      }
   },

   async signup(userData: {
      email: string;
      password?: string;
      firstName: string;
      lastName: string;
   }): Promise<AuthResponse> {
      try {
         const { data, error } = await supabase.auth.signUp({
            email: userData.email,
            password: userData?.password ?? '',
            options: {
               data: {
                  first_name: userData.firstName,
                  last_name: userData.lastName
               }
            }
         });

         if (error)
            return {
               user: null,
               token: null,
               error: getErrorMessage(error.code as string),
               status: error.status as number
            };

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
         };
      } catch (error) {
         return {
            user: null,
            token: null,
            error: 'Registration failed',
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR
         };
      }
   },

   async logout(): Promise<AuthResponse> {
      try {
         const { error } = await supabase.auth.signOut();
         if (error) {
            return {
               error: getErrorMessage(error.code as string),
               status: error.status as number
            };
         }
         return { status: HTTP_STATUS.OK };
      } catch (error) {
         console.error('Logout failed', error);
         return {
            error: 'Logout failed',
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR
         };
      }
   },

   async getSession(): Promise<AuthResponse> {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
         return { error: getErrorMessage(error.code as string) };
      }
      return {
         user: data.session?.user
            ? {
                 id: data.session?.user.id,
                 email: data.session?.user.email ?? '',
                 firstName: data.session?.user.user_metadata?.first_name,
                 lastName: data.session?.user.user_metadata?.last_name,
                 createdAt: data.session?.user.created_at
              }
            : null
      };
   }
};
