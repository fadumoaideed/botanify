import { Navbar } from '@/components/navbar/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/auth-context'

export default function App({ Component, pageProps }: AppProps) {
   return (
      <AuthProvider>
         <Navbar />
         <Component {...pageProps} />
      </AuthProvider>
   )
}
