import React from 'react'
import {
   Container,
   Image,
   Content,
   IconContainer,
   Text,
   Heading,
   SubHeading,
   Button
} from './signup-cta.styles'
import { TbSunFilled, TbSunLow } from 'react-icons/tb'
import { PiStackThin, PiStackSimpleThin } from 'react-icons/pi'
import { ComponentContainer } from '@/pages'

export const SignupCta = () => {
   return (
      <ComponentContainer>
         <Container>
            <Image
               src="/plant_images/begonia-masoniana-rock-685437_900x.webp"
               alt="Signup CTA"
            />
            <Content>
               <Heading>Monitor your plant health</Heading>
               <SubHeading>
                  Get personalized plant care tips, watering schedules, and
                  expert gardening advice.
               </SubHeading>
               <IconContainer>
                  <Text>Watering</Text>
               </IconContainer>
               <IconContainer>
                  <Text>Light</Text>
                  <TbSunFilled />
                  <TbSunLow />
               </IconContainer>
               <IconContainer>
                  <Text>Soil Drainage</Text>
                  <PiStackThin />
                  <PiStackSimpleThin />
               </IconContainer>
               <Button>Get started</Button>
            </Content>
         </Container>
      </ComponentContainer>
   )
}
