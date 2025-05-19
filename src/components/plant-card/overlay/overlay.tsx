import { Plant } from '@/types/plant';
import {
   OverlayContainer,
   CardContainer,
   ImageContainer,
   CardImage,
   Title
} from './overlay.styles';

export const Overlay = ({
   handleCloseOverlay,
   plant
}: {
   handleCloseOverlay: () => void;
   plant: Plant;
}) => {
   const {
      image,
      title,
      description,
      scientificName,
      watering,
      sunlight,
      maxheight,
      soilDrainage,
      tags
   } = plant;

   return (
      <OverlayContainer>
         <CardContainer>
            <button onClick={handleCloseOverlay}>Close</button>
            <ImageContainer>
               <CardImage src={image} alt={title} />
            </ImageContainer>
            <Title>{title}</Title>
         </CardContainer>
      </OverlayContainer>
   );
};
