/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import {
   HeroCtaContainer,
   Grid,
   GridItem,
   Content,
   TextContainer,
   Title,
   Subtitle,
   Button,
   StyledImage,
   Calendar,
   CalendarSpan,
   CalendarContainer,
   IconWrapper
} from './hero-cta.styles';
import router from 'next/router';
import { useAuth } from '@/hooks/auth-context';
import { PiStackThin } from 'react-icons/pi';
import { RxSun } from 'react-icons/rx';
import { IoWaterSharp } from 'react-icons/io5';

const handleClick = (isAuthenticated: boolean) => {
   if (!isAuthenticated) {
      router.push('/login');
   } else {
      router.push('/dashboard');
   }
};

const trackingOptions = [
   {
      option: 'sunlight exposure',
      subtitle: 'Monitor sunlight exposure for your indoor plants',
      icon: <RxSun />
   },
   {
      option: 'soil drainage',
      subtitle:
         'Monitor soil drainage and get alerts when your plants need repotting',
      icon: <PiStackThin />
   },
   {
      option: 'watering schedule',
      subtitle:
         "Receive custom watering schedules based on your plant's specific needs",
      icon: <IoWaterSharp />
   }
];

export const HeroCta = () => {
   const { isAuthenticated } = useAuth();
   const [currentOption, setCurrentOption] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentOption((prev) => (prev + 1) % trackingOptions.length);
      }, 4000); // Change every 3 seconds

      return () => clearInterval(interval);
   }, []);

   return (
      <HeroCtaContainer>
         <Grid>
            <GridItem gridArea="a">
               <Content>
                  <StyledImage src="images/snake-plant.png" alt="snake plant" />
                  <TextContainer>
                     <Title>Breathe Better with Plants</Title>
                     <Subtitle>
                        Discover nature&apos;s air purifiers that transform your
                        home into a healthier sanctuary
                     </Subtitle>
                     <Button onClick={() => handleClick(isAuthenticated)}>
                        Learn More
                     </Button>
                  </TextContainer>
               </Content>
            </GridItem>
            <GridItem gridArea="b">
               <Content>
                  <CalendarContainer>
                     <Calendar>
                        <CalendarSpan />
                     </Calendar>
                  </CalendarContainer>
                  <TextContainer>
                     <Title>Plant Care Reminders</Title>
                     <Subtitle>
                        Never miss a watering day with personalized care alerts
                        for each of your green companions
                     </Subtitle>
                  </TextContainer>
               </Content>
            </GridItem>
            <GridItem gridArea="c">
               <Content>
                  {/* <IconWrapper>
                     {trackingOptions[currentOption].icon}
                  </IconWrapper> */}
                  <TextContainer>
                     <Title>
                        Track your {trackingOptions[currentOption].option}
                     </Title>
                     <Subtitle>
                        {trackingOptions[currentOption].subtitle}
                     </Subtitle>
                  </TextContainer>
               </Content>
            </GridItem>
         </Grid>
      </HeroCtaContainer>
   );
};
