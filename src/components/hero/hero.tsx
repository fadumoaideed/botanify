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
        <div className="background"></div>
        <img
          src={'/images/monstera-hq.png'}
          alt="Image of monstera plant leaves"
          max-height="950px"
          width="auto"
        />
      </HeroMedia>
    </HeroContainer>
  );
}

export default Hero;
