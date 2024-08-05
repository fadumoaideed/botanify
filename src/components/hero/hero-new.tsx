/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { HeroContainer, HeroText, HeroMedia } from './hero.styles';

function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        <h2>
          Your <span>Personal</span> Plant Care Companion
        </h2>
        <h4>Learn, grow and botanify your space with this comphensive guide</h4>
      </HeroText>
      <HeroMedia>
        <img
          src={'/images/monstera-hero-desktop.png'}
          alt="Image of monstera plant potted"
          max-height="650px"
          width="auto"
        />
      </HeroMedia>
    </HeroContainer>
  );
}

export default Hero;
