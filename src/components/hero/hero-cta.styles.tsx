import styled from '@emotion/styled';

export const HeroCtaContainer = styled.div`
  margin-top: 30px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    padding: 0 100px;
    margin-top: 30px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;

  grid-template-rows: repeat(3, 120px);
  grid-template-areas:
    'a a a a a'
    'b b b b b'
    'c c c c c';

  @media (min-width: 800px) {
    grid-template-rows: repeat(4, 70px);
    grid-template-areas:
      'a a a b b'
      'a a a b b'
      'a a a c c'
      'a a a c c';
  }
`;

export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  &:nth-child(1) {
    grid-area: a;
    position: relative;

    .snake-plant {
      height: 440px;
    }
    color: #192831;
    background-color: #ead9cf;
  }

  &:nth-child(1)::before {
    content: '';
    clip-path: path(
      'M 0,0 Q 0.46,0.641 0,0.006 L 0.235,0.006 Q 0.385,0.135 0.465,0.309 Q 0.565,0.132 0.555,0 L 0.75,0 Q 0.595,0.729 1.02,0.718 L 1.005,0.809 Q 0.695,0.818 0.525,0.574 Q 0.495,0.829 0.45,1.015 L 0.215,1.003 Z'
    );
    background-color: red;
    position: absolute;
    left: 10px;
    top: 10px;
    width: 100px;
    height: 100px;
    z-index: 2;
  }

  &:nth-child(2) {
    grid-area: b;
    color: #cbd6dd;
    background-color: #153135;
  }
  &:nth-child(3) {
    grid-area: c;
    color: #192831;
    background-color: #e6eae3;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 24px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  padding: 1rem;
  font-family: 'Comfortaa', cursive;
  text-align: center;
`;

export const Subtitle = styled.h4`
  padding: 1rem;
  margin-top: 10px;
  font-size: 16px;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
`;

export const Image = styled.img`
  height: 440px;

  &:nth-child(1) {
    align-self: flex-end;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
  color: #192831;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  width: 160px;
  height: 40px;
`;
