/* eslint-disable @next/next/no-img-element */
import React from 'react'
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
} from './hero.styles'
import { WiRaindrop } from 'react-icons/wi'

function Hero() {
   return (
      <HeroContainer>
         <HeroText>
            <Title>
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
                  alt="Image of monstera plant leaves mobile"
               />
               <StyledDesktopImage
                  src={'/images/monstera-desktop-background.png'}
                  alt="Image of monstera plant leaves desktop"
               />
               <TargetIndicator />
               <IndicatorText>
                  <WiRaindrop color="lightblue" />
                  <span> &gt;80%</span>
               </IndicatorText>
            </ImageContainer>
         </HeroMedia>
      </HeroContainer>
   )
}

export default Hero
