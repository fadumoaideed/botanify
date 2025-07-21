/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Drainage, LightLevel, Plant } from '../../types/plant';
import {
   CardContainer,
   CardImage,
   Title,
   ImageContainer
} from './plant-card.styles';
import { TbSunFilled, TbSunLow, TbSunHigh } from 'react-icons/tb';
import { PiStackThin, PiStackSimpleThin } from 'react-icons/pi';
import { Overlay } from './overlay/overlay';

const iconMap = {
   [LightLevel.direct]: <TbSunFilled />,
   [LightLevel.shade]: <TbSunLow />,
   [LightLevel.partial]: <TbSunHigh />,
   [Drainage.high]: <PiStackThin />,
   [Drainage.low]: <PiStackSimpleThin />
} as const;

const getIcon = (type: LightLevel | Drainage | undefined) => {
   const iconName = iconMap[type as keyof typeof iconMap];
   return iconName ?? null;
};

export const PlantCard = ({ plant }: { plant: Plant }): React.JSX.Element => {
   const [showOverlay, setShowOverlay] = useState(false);

   const handleShowOverlay = () => {
      setShowOverlay(!showOverlay);
   };

   const { image, title } = plant;

   return (
      <>
         <CardContainer onClick={handleShowOverlay}>
            <ImageContainer>
               <CardImage src={image} alt={title} />
            </ImageContainer>
            <Title>{title}</Title>
         </CardContainer>
         {showOverlay && (
            <Overlay handleCloseOverlay={handleShowOverlay} plant={plant} />
         )}
      </>
   );
};
