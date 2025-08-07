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
   const closeButtonRef = useRef<HTMLButtonElement>(null);

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
      // Focus the close button when overlay opens
      if (closeButtonRef.current) {
         closeButtonRef.current.focus();
      }

      // Trap focus within the modal
      const handleTabKey = (e: KeyboardEvent) => {
         if (e.key === 'Tab') {
            const focusableElements = cardRef.current?.querySelectorAll(
               'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusableElements && focusableElements.length > 0) {
               const firstElement = focusableElements[0] as HTMLElement;
               const lastElement = focusableElements[
                  focusableElements.length - 1
               ] as HTMLElement;

               if (e.shiftKey) {
                  if (document.activeElement === firstElement) {
                     e.preventDefault();
                     lastElement.focus();
                  }
               } else {
                  if (document.activeElement === lastElement) {
                     e.preventDefault();
                     firstElement.focus();
                  }
               }
            }
         }
      };

      const handleClickOutside = (event: MouseEvent) => {
         if (
            cardRef.current &&
            !cardRef.current.contains(event.target as Node)
         ) {
            handleCloseOverlay();
         }
      };

      const handleEscapeKey = (event: KeyboardEvent) => {
         if (event.key === 'Escape') {
            handleCloseOverlay();
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('keydown', handleTabKey);

      // Prevent background scrolling
      document.body.style.overflow = 'hidden';

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
         document.removeEventListener('keydown', handleEscapeKey);
         document.removeEventListener('keydown', handleTabKey);
         document.body.style.overflow = 'auto';
      };
   }, [handleCloseOverlay]);

   // Helper function to format enum values
   const formatEnumValue = (value: string) => {
      return value.toLowerCase().replace(/_/g, ' ');
   };

   return (
      <OverlayContainer
         role="dialog"
         aria-modal="true"
         aria-labelledby="plant-title"
         aria-describedby="plant-description"
      >
         <CardContainer ref={cardRef}>
            <CloseButton
               ref={closeButtonRef}
               onClick={handleCloseOverlay}
               aria-label={`Close ${title} details`}
               type="button"
            >
               ✕
            </CloseButton>
            <ContentContainer>
               <ImageSection>
                  <ImageContainer>
                     <CardImage src={image} alt={`${title} plant`} />
                  </ImageContainer>
               </ImageSection>

               <ContentSection>
                  <div>
                     <Title id="plant-title">{title}</Title>
                     <ScientificName>{scientificName}</ScientificName>
                  </div>

                  {description && (
                     <Description id="plant-description">
                        {description}
                     </Description>
                  )}

                  <DetailsSection
                     role="region"
                     aria-label="Plant care information"
                  >
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
                     <TagsContainer
                        role="region"
                        aria-label="Additional plant information"
                     >
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
