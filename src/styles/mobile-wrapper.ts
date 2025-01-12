import styled from '@emotion/styled';

export const MobileWrapper = styled.div`
  // Container styles for desktop view
  display: flex;
  justify-content: center;
  align-items: center;

//   height: 600px;
  background-color: #f0f0f0;

  // Mobile container styles
  .app-container {
    width: 100%;
    height: 100%;
    max-width: 480px;
    max-height: 932px;
    background-color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }
section {
height:3000px;
}

  // Media query for mobile devices
  @media (max-width: 480px) {
    background-color: white;
    
    .app-container {
      box-shadow: none;
      max-height: none;
    }
  }
`;
