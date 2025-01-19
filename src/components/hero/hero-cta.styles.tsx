import styled from '@emotion/styled';

export const HeroCtaContainer = styled.div`
  //   position: relative;
  margin-top: 50px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    padding: 0 10px;
  }

  @media (min-width: 600px) {
    padding: 0 100px;
    margin-top: 30px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;

  grid-template-rows: repeat(3, 220px);
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

export const GridItem = styled.div<{ gridArea: 'a' | 'b' | 'c' }>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  grid-area: ${({ gridArea }) => gridArea};

  ${({ gridArea }) => {
    switch (gridArea) {
      case 'a':
        return `
          position: relative;
          color: #192831;
          background-color: #ead9cf;
          
    
          &::after {
            content: '';
            position: absolute;
            clip-path: path('M 29,0 L 29,400 Q -75,60 100,0 Z');
            clip-path: path('M 0 0 C 103 353 338 403 547 216 L 554 127 C 335 330 147 251 103 0 L 0 0');
            background-color: #e6b496;
            left: 0%;
            top: 0%;
            width: 100%;
            height: 100%;
            z-index: 1;
      
          }
        `;
      case 'b':
        return `
          position: relative;
          color: #cbd6dd;
          background-color: #153135;

          &::after {
            content: '';
            position: absolute;
            clip-path: path('M 29,0 L 29,400 Q -75,60 100,0 Z');
            clip-path: path('M 0 0 C 103 353 338 403 547 216 L 554 127 C 335 330 147 251 103 0 L 0 0');
            background-color: #2e5b62;
            left: 0%;
            top: 0%;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

        `;
      case 'c':
        return `
          color: #192831;
          background-color: #e6eae3;
        `;
    }
  }}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 2;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  @media (min-width: 600px) {
    padding: 10px;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-family: 'Comfortaa', cursive;
  text-align: center;

  @media (max-width: 375px) {
    font-size: 0.9rem;
  }

  @media (min-width: 600px) {
    padding: 1rem;
    margin-top: 30px;

    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.h4`
  font-size: 16px;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 375px) {
    font-size: 0.7rem;
  }

  @media (min-width: 600px) {
    padding: 1rem;
    margin-top: 10px;
  }
`;

export const StyledImage = styled.img`
  @media (max-width: 375px) {
    height: 200px;
  }

  @media (min-width: 600px) {
    height: 440px;
  }

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

  @media (max-width: 375px) {
    width: 100px;
    height: 30px;
    font-size: 0.7rem;
  }

  @media (min-width: 600px) {
    width: 160px;
    height: 40px;
    font-size: 1rem;
  }
`;
