import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 700px;
  width: 100%;
  padding: 0px 50px 0px 50px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
`;

export const HeroText = styled.div`
  display: inline-block;
  padding: 50px 0px 50px 20px;
  h2 {
    font-family: 'Comfortaa', sans-serif;
    font-weight: 700;
    font-size: 4.5rem;
    width: 600px;
    @media (max-width: 600px) {
      width: auto;
    }
  }

  h4 {
    font-family: 'Manrope', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    padding-top: 25px;
    width: 600px;
  }

  @media (max-width: 480px) {
    padding: 25px 20px 50px 25px;
    font-size: 2rem;
  }
`;

export const HeroMedia = styled.div`
  background-color: #e5eae2;
  border-radius: 15% 0 0 15%;
`;
