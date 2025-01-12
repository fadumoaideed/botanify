import { SIZE_EXTRA_SMALL } from '@/styles/breakpoints';
import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 700px;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    margin-top: 70px;
    padding: 0px;
  }

  @media (min-width: 800px) {
  height: 550px;
  }
`;

export const HeroMedia = styled.div`
  width: 100%;

  div {
    background-color: #e5eae2;
    border-radius: 20px 0 0 20px;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0px;
    height: 100%;
  }

  @media (min-width: 800px) {
    position: relative;
    border-radius: 15% 0 0 15%;
    flex: 1.5;
    padding-left: 50px;

    div {
      background-color: #e5eae2;
      position: absolute;
      width: 80%;
      height: 100%;
      bottom: 0;
      right: 0;
      border-radius: 20px 0 0 20px;
    }

    img {
      position: absolute;
      bottom: 0;
      right: 0px;
      height: 110%;
    }
  }
`;

export const HeroText = styled.div`
  flex: 1.8;
  padding: 0px 0px 50px 50px;

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

  @media (max-width: 375px) {
    padding: 0px;
  }

  @media (min-width: 375px) {
    padding: 25px 20px 50px 25px;
    font-size: 2rem;
  }

  @media (min-width: 800px) {
    padding: 0px 0px 50px 50px;

    h2 {
      font-size: 4.5rem;
    }

    h4 {
      font-size: 1.5rem;
    }
  }
`;
