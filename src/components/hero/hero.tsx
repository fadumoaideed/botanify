/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
   HeroContainer,
   HeroText,
   HeroMedia,
   Title,
   Subtitle,
   Background,
   ImageContainer,
   StyledMobileImage,
   StyledDesktopImage,
   TargetIndicator,
   IndicatorText
} from './hero.styles';
import { WiRaindrop } from 'react-icons/wi';

function Hero() {
   return (
      <HeroContainer as="section" role="banner" aria-label="Main hero section">
         <HeroText>
            <Title as="h1">
               Your <span>Personal</span> Plant Care Companion
            </Title>
            <Subtitle>
               Botanify your space with personalised plant care and gardening
               advice.
            </Subtitle>
         </HeroText>
         <HeroMedia>
            <Background />
            <ImageContainer>
               <StyledMobileImage
                  src={'/images/monstera-hq.png'}
                  alt="Close-up view of monstera plant leaves showing natural fenestrations and vibrant green color"
               />
               <StyledDesktopImage
                  src={'/images/monstera-desktop-background.png'}
                  alt="Desktop view of monstera plant in natural lighting showcasing healthy foliage"
               />
               <TargetIndicator aria-hidden="true" />
               <IndicatorText
                  role="img"
                  aria-label="Soil moisture level indicator showing over 80 percent"
               >
                  <WiRaindrop color="lightblue" aria-hidden="true" />
                  <span aria-hidden="true"> &gt;80%</span>
               </IndicatorText>
            </ImageContainer>
         </HeroMedia>
      </HeroContainer>
   );
}

export default Hero;
