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
        transform: scale(0.8);
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
`;
