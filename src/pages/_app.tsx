import { Navbar } from '@/components/navbar/navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../hooks/auth-context';
import { Footer } from '@/components/footer/footer';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <AuthProvider>
         <Navbar />
         <Component {...pageProps} />
         <Footer />
      </AuthProvider>
   );
}
