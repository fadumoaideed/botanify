import { Plant } from '@/types/plant';
import { useRef, useEffect } from 'react';
import {
   OverlayContainer,
   CardContainer,
   ImageContainer,
   CardImage,
   Title,
   ContentContainer,
   ContentText,
   Description,
   CloseButton,
   ImageSection,
   ContentSection,
   ScientificName,
   DetailItem,
   DetailLabel,
   DetailValue,
   DetailsSection,
   TagsContainer,
   Tag,
   TagLabel,
   TagValue
} from './overlay.styles';

export const Overlay = ({
   handleCloseOverlay,
   plant
}: {
   handleCloseOverlay: () => void;
   plant: Plant;
}) => {
   const cardRef = useRef<HTMLDivElement>(null);

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

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            cardRef.current &&
            !cardRef.current.contains(event.target as Node)
         ) {
            handleCloseOverlay();
         }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [handleCloseOverlay]);

   // Helper function to format enum values
   const formatEnumValue = (value: string) => {
      return value.toLowerCase().replace(/_/g, ' ');
   };

   return (
      <OverlayContainer>
         <CardContainer ref={cardRef}>
            <CloseButton onClick={handleCloseOverlay}>✕</CloseButton>
            <ContentContainer>
               <ImageSection>
                  <ImageContainer>
                     <CardImage src={image} alt={title} />
                  </ImageContainer>
               </ImageSection>

               <ContentSection>
                  <div>
                     <Title>{title}</Title>
                     <ScientificName>{scientificName}</ScientificName>
                  </div>

                  {description && <Description>{description}</Description>}

                  <DetailsSection>
                     <DetailItem>
                        <DetailLabel>Watering Schedule:</DetailLabel>
                        <DetailValue>{watering?.toLowerCase()}</DetailValue>
                     </DetailItem>

                     {sunlight && (
                        <DetailItem>
                           <DetailLabel>Light Requirements:</DetailLabel>
                           <DetailValue>
                              {formatEnumValue(sunlight)} light
                           </DetailValue>
                        </DetailItem>
                     )}

                     <DetailItem>
                        <DetailLabel>Soil Drainage:</DetailLabel>
                        <DetailValue>
                           {soilDrainage?.toLowerCase()} drainage
                        </DetailValue>
                     </DetailItem>

                     {maxheight && (
                        <DetailItem>
                           <DetailLabel>Max Height:</DetailLabel>
                           <DetailValue>{maxheight}</DetailValue>
                        </DetailItem>
                     )}
                  </DetailsSection>

                  {tags && (
                     <TagsContainer>
                        <DetailLabel style={{ marginBottom: '10px' }}>
                           Additional Information:
                        </DetailLabel>

                        {tags.common_names && (
                           <Tag>
                              <TagLabel>Common Names:</TagLabel>
                              <TagValue>{tags.common_names}</TagValue>
                           </Tag>
                        )}

                        {tags.difficulty && (
                           <Tag>
                              <TagLabel>Care Difficulty:</TagLabel>
                              <TagValue>{tags.difficulty}/10</TagValue>
                           </Tag>
                        )}

                        {tags.toxicity && (
                           <Tag>
                              <TagLabel>Toxicity:</TagLabel>
                              <TagValue>{tags.toxicity}</TagValue>
                           </Tag>
                        )}

                        {tags.origin && (
                           <Tag>
                              <TagLabel>Origin:</TagLabel>
                              <TagValue>{tags.origin}</TagValue>
                           </Tag>
                        )}
                     </TagsContainer>
                  )}
               </ContentSection>
            </ContentContainer>
         </CardContainer>
      </OverlayContainer>
   );
};
