/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { HeroContainer, HeroText, HeroMedia } from './hero.styles';
import { WiRaindrop } from 'react-icons/wi';

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
        <div className="image-container">
          <img src={'/images/monstera-hq.png'} alt="Image of monstera plant leaves" max-height="950px" width="auto" />

          <div className="target-indicator" />
          <div className="indicator-text">
            <WiRaindrop />
            <span> &gt;80%</span>
          </div>
        </div>{' '}
      </HeroMedia>
    </HeroContainer>
  );
}

export default Hero;
