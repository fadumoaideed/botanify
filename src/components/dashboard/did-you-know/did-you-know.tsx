import { plantFacts } from '@/lib/plant-facts';
import Image from 'next/image';
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
            <Image
               src={randomPlantFact.image}
               alt={`plant fact ${randomPlantFact.plantName}`}
               width={100}
               height={100}
            />
         </ImageContainer>{' '}
         <Content>
            <Title>Did you know?</Title>
            <Fact>{randomPlantFact.fact}</Fact>
         </Content>
      </Container>
   );
};
