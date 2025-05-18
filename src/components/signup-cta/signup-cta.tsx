import styled from '@emotion/styled';

const Container = styled.div`
   display: block;
   width: 100%;
   padding: 2rem 0;
`;

const FlexContainer = styled.div`
   display: flex;
   gap: 2rem;
   max-width: 1200px;
   margin: 0 auto;
   padding: 0 1rem;

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

const VideoContainer = styled.div`
   flex: 2;
   position: relative;
   border-radius: 12px;
   overflow: hidden;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   border-radius: 12px;

   @media (max-width: 768px) {
      flex: none;
      //   height: 300px;
   }
`;

const Video = styled.video`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;

const Content = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 2rem;
`;

const Title = styled.h2`
   font-size: 2.5rem;
   color: #2c3e50;
   margin-bottom: 1rem;
   font-family: 'Comfortaa', cursive;
`;

const Description = styled.p`
   font-size: 1.1rem;
   color: #666;
   line-height: 1.6;
   margin-bottom: 2rem;
   font-family: 'Roboto', sans-serif;
`;

const CTAButton = styled.a`
   display: inline-block;
   padding: 1rem 2rem;
   background-color: #4caf50;
   color: white;
   text-decoration: none;
   border-radius: 8px;
   font-weight: 600;
   transition: background-color 0.3s ease;

   &:hover {
      background-color: #45a049;
   }
`;

export const SignupCTA = () => {
   return (
      <Container>
         <FlexContainer>
            <VideoContainer>
               <Video autoPlay loop muted playsInline>
                  <source src="/potting.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
               </Video>
            </VideoContainer>
            <Content>
               <Title>Transform Your Plant Care Journey</Title>
               <Description>
                  Join thousands of plant parents who are growing their green
                  thumb with Botanify and connect with a community of plant
                  lovers.
               </Description>
               <CTAButton href="/signup">Start Growing Today</CTAButton>
            </Content>
         </FlexContainer>
      </Container>
   );
};
