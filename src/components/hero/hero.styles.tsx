import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  height: 100vh;

  @media (max-width: 375px) {
    flex-direction: column;
  }

  @media (min-width: 376px) {
    flex-direction: column;
    padding: 0px;
    gap: 0px;
  }

  @media (min-width: 600px) {
    margin-top: 50px;
    padding: 0px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 550px;
    gap: 0px;
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
    h2 {
      padding: 0 15px 0 15px;
      font-size: 3rem;
    }
    h4 {
      padding: 0 15px 0 15px;
    }
  }

  @media (min-width: 600px) {
    padding: 0px 0px 50px 40px;

    h2 {
      font-size: 4rem;
    }

    h4 {
      font-size: 1.5rem;
      width: 80%;
    }
  }

  @media (min-width: 800px) {
    flex: 1;
    padding: 50px 0px 50px 40px;

    h2 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 980px) {
    h2 {
      font-size: 4rem;
    }
  }

  @media (min-width: 1200px) {
    h2 {
      font-size: 4.3rem;
    }
  }
`;

export const HeroMedia = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;
  flex: 1;

  width: 100%;
  height: 350px;
  background-color: transparent;

  .background {
    position: absolute;
    width: 100%;
    height: 45%;
    bottom: 0;
    background-color: #e5eae2;
    z-index: 2;
  }

  .image-container {
    position: relative;
  }

  .image-mobile {
    position: relative;
    width: 80%;
    margin-left: auto;
    z-index: 3;
    animation: scaleIn 1.5s ease-out;
    transform-origin: right bottom;

    @keyframes scaleIn {
      from {
        transform: scale(0.9);
      }
      to {
        transform: scale(1);
      }
    }
  }

  .image-desktop {
    display: none;
  }

  .target-indicator {
    //inner circle
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
      //Outer circlei
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
      // Line after target
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
  }

  @media (min-width: 376px) {
    height: auto;

    .target-indicator {
      top: 30%;
      left: 30%;
    }

    .target-indicator::after {
      width: 50px;
    }
  }

  @media (min-width: 450px) {
    .target-indicator::after {
      width: 70px;
    }
  }

  @media (min-width: 600px) {
    .target-indicator::after {
      width: 70px;
    }
  }

  @media (min-width: 800px) {
    flex: 1.6;

    margin-left: auto;

    .background {
      display: none;
    }

    .image-desktop {
      display: block;
      position: relative;
      z-index: 3;
      animation: none;
      transform-origin: right bottom;
      height: 80%;
      @keyframes scaleIn {
        from {
          transform: scale(0.9);
        }
        to {
          transform: scale(1);
        }
      }
    }

    .image-mobile {
      display: none;
    }

    .background {
      top: 0;
      border-radius: 50%;
      height: 100%;
    }
  }

  @media (min-width: 980px) {
    .image-desktop {
      height: 90%;
      margin-right: 50px;
    }
  }

  @media (min-width: 980px) {
    .image-desktop {
      height: 100%;
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
