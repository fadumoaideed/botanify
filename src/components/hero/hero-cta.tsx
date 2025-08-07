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
      subtitle:
         "Monitor your plants' light levels and get recommendations for optimal placement in your home.",
      icon: <RxSun />
   },
   {
      option: 'soil moisture levels',
      subtitle:
         'Keep track of watering schedules and soil conditions to prevent over or under-watering.',
      icon: <IoWaterSharp />
   }
];

export const HeroCta = () => {
   const { isAuthenticated } = useAuth();
   const [currentOption, setCurrentOption] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentOption((prev) => (prev + 1) % trackingOptions.length);
      }, 4000); // Change every 4 seconds

      return () => clearInterval(interval);
   }, []);

   return (
      <HeroCtaContainer
         as="section"
         role="region"
         aria-label="Plant care features"
      >
         <Grid>
            <GridItem gridArea="a">
               <Content>
                  <StyledImage
                     src="images/snake-plant.png"
                     alt="Snake plant (Sansevieria) with tall, upright green leaves with yellow edges in a white pot"
                  />
                  <TextContainer>
                     <Title as="h2">Breathe Better with Plants</Title>
                     <Subtitle>
                        Discover nature&apos;s air purifiers that transform your
                        home into a healthier sanctuary
                     </Subtitle>
                     <Button
                        onClick={() => handleClick(isAuthenticated)}
                        aria-label={
                           isAuthenticated
                              ? 'Go to your dashboard'
                              : 'Sign in to learn more about plants'
                        }
                     >
                        Learn More
                     </Button>
                  </TextContainer>
               </Content>
            </GridItem>
            <GridItem gridArea="b">
               <Content>
                  <CalendarContainer>
                     <Calendar
                        role="img"
                        aria-label="Calendar icon representing plant care scheduling"
                     >
                        <CalendarSpan aria-hidden="true" />
                     </Calendar>
                  </CalendarContainer>
                  <TextContainer>
                     <Title as="h2">Plant Care Reminders</Title>
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
                     <Title as="h2">
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
