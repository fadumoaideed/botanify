import Hero from '@/components/hero/hero';
import { HeroCta } from '@/components/hero/hero-cta';
import Head from 'next/head';
import styled from '@emotion/styled';
import { SignupCta } from '@/components/signup-cta/signup-cta';
import Footer from '@/components/footer/footer';
import { ImageCta } from '@/components/image-cta/image-cta';
const HomePageContainer = styled.main`
   position: relative;
   width: 100vw;
   margin: 0 auto;
   // // margin: 0 auto;

   @media (min-width: 1200px) {
      max-width: 95%;
   }

   @media (min-width: 1600px) {
      max-width: 75%;
   }

   @media (min-width: 1900px) {
      max-width: 65%;
   }

   @media (min-width: 2300px) {
      max-width: 55%;
   }

   @media (min-width: 2600px) {
      max-width: 45%;
   }
`;
export const ComponentContainer = styled.div`
   display: flex;
   box-sizing: border-box;
   flex-direction: column;
   max-width: 1600px;

   @media (min-width: 375px) {
      padding: 0px;
   }

   @media (min-width: 600px) {
      padding: 0px;
   }

   @media (min-width: 800px) {
      padding: 0 50px;
   }

   @media (min-width: 960px) {
      padding: 0 80px;
   }

   @media (min-width: 1200px) {
      margin: 0 auto;
   }
`;

export default function Home() {
   return (
      <>
         <Head>
            <title>Botanify - Your Personal Plant Care Assistant</title>
            <meta
               name="description"
               content="Discover, identify, and care for your plants with Botanify. Get personalized plant care tips, watering schedules, and expert gardening advice."
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <meta
               name="keywords"
               content="plant care, plant identification, gardening app, houseplants, plant watering, plant tips, botanical guide"
            />
            {/* Open Graph tags for social sharing */}
            <meta
               property="og:title"
               content="Botanify - Your Personal Plant Care Assistant"
            />
            <meta
               property="og:description"
               content="Discover, identify, and care for your plants with Botanify. Get personalized plant care tips, watering schedules, and expert gardening advice."
            />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/og-image.jpg" />{' '}
            {/* // TODO: Make sure to add an og-image.jpg to your public folder */}
            <meta property="og:url" content="https://botanify.com" />{' '}
            {/* Update with your actual domain */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href="https://botanify.com" />{' '}
            {/* Update with your actual domain */}
         </Head>
         <HomePageContainer>
            <Hero />
            <HeroCta />
            <ImageCta />
            <SignupCta />
         </HomePageContainer>
         <Footer />
      </>
   );
}
