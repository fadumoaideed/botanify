import { plantFacts } from '@/lib/plant-facts';
import {
   Container,
   Content,
   Title,
   Fact,
   ImageContainer
} from './did-you-know.styles';

export const DidYouKnow = () => {
   const randomPlantFact =
      plantFacts[Math.floor(Math.random() * plantFacts.length)];
   return (
      <Container>
         <ImageContainer>
            <img
               src={randomPlantFact.image}
               alt={`plant fact ${randomPlantFact.plantName}`}
            />
         </ImageContainer>{' '}
         <Content>
            <Title>Did you know?</Title>
            <Fact>{randomPlantFact.fact}</Fact>
         </Content>
      </Container>
   );
};
