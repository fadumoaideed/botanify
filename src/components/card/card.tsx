/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Drainage, LightLevel, Plant } from '../../types/plant'
import { CardContainer, CardImage, Title } from './card.styles'
import { TbSunFilled, TbSunLow, TbSunHigh } from 'react-icons/tb'
import { PiStackThin, PiStackSimpleThin } from 'react-icons/pi'

const iconMap = {
   [LightLevel.direct]: <TbSunFilled />,
   [LightLevel.shade]: <TbSunLow />,
   [LightLevel.partial]: <TbSunHigh />,
   [Drainage.high]: <PiStackThin />,
   [Drainage.low]: <PiStackSimpleThin />
} as const

const getIcon = (type: LightLevel | Drainage | undefined) => {
   const iconName = iconMap[type as keyof typeof iconMap]
   return iconName ?? null
}

export const Card = ({ title, image }: Plant) => {
   return (
      <CardContainer>
         <CardImage src={image} alt={title} />
         <Title>{title}</Title>
      </CardContainer>
   )
}
