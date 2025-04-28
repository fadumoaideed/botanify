import React from 'react';
import {
   Container,
   Content,
   Button,
   FeatureRow,
   IconWrapper,
   FeatureText,
   CTAContainer,
   Heading
} from './signup-cta.styles';
import { PiStackThin } from 'react-icons/pi';
import { RxSun } from 'react-icons/rx';
import { IoWaterSharp } from 'react-icons/io5';
import router from 'next/router';

// TODO!: Animate the icons
export const SignupCta = () => {
   return (
      <Container>
         <Content>
            <FeatureRow>
               <IconWrapper>
                  <RxSun />
               </IconWrapper>
               <FeatureText>
                  Track sunlight exposure for your indoor plants with
                  personalized recommendations
               </FeatureText>
            </FeatureRow>

            <FeatureRow>
               <IconWrapper>
                  <PiStackThin />
               </IconWrapper>
               <FeatureText>
                  Monitor soil drainage and get alerts when your plants need
                  repotting
               </FeatureText>
            </FeatureRow>

            <FeatureRow>
               <IconWrapper>
                  <IoWaterSharp />
               </IconWrapper>
               <FeatureText>
                  Receive custom watering schedules based on your plant's
                  specific needs
               </FeatureText>
            </FeatureRow>
         </Content>
         {/* <CTAContainer>
            <Heading> Get started...</Heading>
            <Button onClick={() => router.push('/signup')}>Get started</Button>
         </CTAContainer> */}
      </Container>
   );
};
