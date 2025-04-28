import { ComponentContainer } from '@/pages';
import { Image, Container } from './image-cta.styles';

export const ImageCta = () => {
   return (
      <Container>
         <Image
            src="/images/monitor-plant-level.png"
            alt="Plant monitor levels"
         />
      </Container>
   );
};
