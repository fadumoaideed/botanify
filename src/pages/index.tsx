import Hero from '@/components/hero/hero';
import { MobileWrapper } from '@/styles/mobile-wrapper';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Botanify - Your Personal Plant Care Assistant</title>
        <meta name="description" content="Discover, identify, and care for your plants with Botanify. Get personalized plant care tips, watering schedules, and expert gardening advice." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="plant care, plant identification, gardening app, houseplants, plant watering, plant tips, botanical guide" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Botanify - Your Personal Plant Care Assistant" />
        <meta property="og:description" content="Discover, identify, and care for your plants with Botanify. Get personalized plant care tips, watering schedules, and expert gardening advice." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" /> {/* // TODO: Make sure to add an og-image.jpg to your public folder */} 
        <meta property="og:url" content="https://botanify.com" /> {/* Update with your actual domain */}
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://botanify.com" /> {/* Update with your actual domain */}
      </Head>
      <Hero />

      
    </>
  );
}
