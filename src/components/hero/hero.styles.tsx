import { SIZE_EXTRA_SMALL } from '@/styles/breakpoints';
import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  gap:20px;

  @media (max-width: 375px) {
    flex-direction: column;
  }

  @media (min-width: 376px) {
    flex-direction: column;
    padding: 50px 10px 20px 10px;
    padding: 0px;
    gap: 0px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin-top: 70px;
    padding: 0px;
  }

  @media (min-width: 800px) {
    position: relative;
    flex-direction: row;
    width: 100%;
    height: 550px;
  }
`;

export const HeroText = styled.div`
  flex: 1.8;

  padding: 40px 10px 20px 10px;

  h2 {
    font-family: 'Comfortaa', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
  }

  h4 {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    padding-top: 25px;
  }

  @media (min-width: 376px) {
    padding: 25px 20px 50px 25px;
    font-size: 2rem;
  }

  @media (min-width: 600px) {
    padding: 0px 0px 50px 50px;

    h2 {
      font-size: 4.5rem;
    }

    h4 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 800px) {
    padding: 0px 0px 50px 50px;
  }
`;

export const HeroMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  width: 100%;
  height: 450px;
  background-color: transparent;
  border-radius: 30% 0 0 30%;
  position: relative;

  .image-container {
    position: relative;
    z-index: 3;

  }

  .background {
    position: absolute;
    width: 100%;
    height: 45%;
    bottom: 0;
    background-color: #e5eae2;
    z-index: 2;
    
  }

  img {
    min-width: 300px;
    height: 110%;
    width: 90%;
    z-index: 3;
    animation: scaleIn 2s ease-out;
    transform-origin: right center;

    @keyframes scaleIn {
      from {
        transform: scale(0.9);
      }
      to {
        transform: scale(1);
      }
    }
  }

  border-radius: 0px;

  @media (min-width: 376px) {
    img {
      width: 360px;
    }
  }

  @media (min-width: 600px) {
  }

  @media (min-width: 800px) {
    flex: 1.5;
    padding-left: 50px;
  }

  .target-indicator {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 30%;
    left: 15%;
    z-index: 4;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
    animation: pulse 2s infinite ease-in-out;
    animation-delay: 2s;
    opacity: 0;
    animation: fadeIn 0.5s ease-out 2s forwards,
             pulse 2s infinite ease-in-out 2s;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 7.5px;
      height: 7.5px;
      background: #ff6b35; // Orange center
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      width: 50px;
      height: 2px;
      background: lightgrey;
      transform: translateY(-50%);
      animation-delay: 2s;
    }
  }

  .indicator-text {
    position: absolute;
    top: 25%;
    left: -10%;
    z-index: 4;
    color: black;
    display: flex;
    align-items: center;
    gap: 5px;
    animation: fadeIn 0.5s ease-out 0.5s forwards;
    opacity: 0;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
