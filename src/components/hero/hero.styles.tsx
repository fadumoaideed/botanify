import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  box-sizing: border-box;

  flex-direction: column;

  @media (min-width: 375px) {
    flex-direction: column;
    padding: 0px;
    gap: 0px;
  }

  @media (min-width: 600px) {
    padding: 0px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    width: 100%;
    height: 450px;
    gap: 0px;
    padding: 0 50px;
  }

  @media (min-width: 960px) {
    padding: 0 100px;
  }
`;

export const HeroText = styled.div`
  padding: 25px 20px 50px 25px;

  @media (min-width: 375px) {
    padding: 25px 20px 50px 25px;
  }

  @media (min-width: 450px) {
    padding: 25px 50px 50px 50px;
  }

  @media (min-width: 600px) {
    padding: 50px 50px 50px 40px;
  }

  @media (min-width: 800px) {
    padding: 50px 0px 0 0;
  }

  @media (min-width: 960px) {
    padding: 50px 0px 0 0;
  }
`;

export const Title = styled.h2`
  font-family: 'Comfortaa', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;

  @media (min-width: 375px) {
    padding: 0 15px 0 15px;
    font-size: 3rem;
  }

  @media (min-width: 600px) {
    font-size: 4rem;
  }

  @media (min-width: 800px) {
    font-size: 2.9rem;
  }

  @media (min-width: 960px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.h4`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  padding-top: 25px;

  @media (min-width: 375px) {
    padding: 0 15px 0 15px;
  }

  @media (min-width: 600px) {
    font-size: 1.5rem;
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const HeroMedia = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 350px;
  background-color: transparent;

  @media (min-width: 375px) {
    height: auto;
  }

  @media (min-width: 800px) {
    margin-top: 30px;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 45%;
  bottom: 0;
  background-color: #e5eae2;
  z-index: 2;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const StyledMobileImage = styled.img`
  position: relative;
  margin-left: auto;
  z-index: 3;
  animation: scaleIn 1.5s ease-out;
  transform-origin: right bottom;
  bottom: 0;
  height: 90%;
  width: auto;
  align-self: flex-end;
  @media (min-width: 800px) {
    display: none;
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const StyledDesktopImage = styled.img`
  display: none;
  max-height: 950px;
  width: auto;

  @media (min-width: 800px) {
    display: block;
    position: relative;
    z-index: 3;
    animation: none;
    transform-origin: right bottom;
    max-height: 370px;
  }

  @media (min-width: 960px) {
    height: 90%;
    max-height: 500px;
  }

  @media (min-width: 1200px) {
    height: 100%;
  }
`;

export const TargetIndicator = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 30%;
  left: 30%;
  z-index: 4;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  animation: pulse 2s infinite ease-in-out;
  animation-delay: 2s;
  opacity: 0;
  animation: fadeIn 0.5s ease-out 2s forwards, pulse 2s infinite ease-in-out 2s;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7.5px;
    height: 7.5px;
    background: #ff6b35;
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

  @media (min-width: 375px) {
    top: 30%;
    left: 30%;

    &::after {
      width: 50px;
    }
  }

  @media (min-width: 450px) {
    &::after {
      width: 70px;
    }
  }

  @media (min-width: 600px) {
    &::after {
      width: 70px;
    }
  }
`;

export const IndicatorText = styled.div`
  position: absolute;
  top: 29%;
  right: 83%;
  transform: translateY(-50%);
  z-index: 4;
  color: black;
  display: flex;
  align-items: center;
  gap: 0px;
  animation: fadeIn 0.5s ease-out 2.5s forwards;
  opacity: 0;
  font-family: 'Manrope', sans-serif;
  font-size: 0.8rem;

  svg {
    width: 20px;
    height: 20px;
  }
`;
