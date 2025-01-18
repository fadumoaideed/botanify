/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  HeroCtaContainer,
  Grid,
  GridItem,
  Content,
  TextContainer,
  Image,
  Title,
  Subtitle,
  Button,
} from './hero-cta.styles';
import { FaCalendarDays } from 'react-icons/fa6';

export const HeroCta = () => {
  return (
    <HeroCtaContainer>
      <Grid>
        <GridItem>
          <Content>
            <Image src="images/snake-plant.png" alt="snake plant" />
            <TextContainer>
              <Title>Breathe Better with Plants</Title>
              <Subtitle>
                Discover nature&apos;s air purifiers: Top indoor plants that transform your home into a healthier
                sanctuary
              </Subtitle>
              <Button>Learn More</Button>
            </TextContainer>
          </Content>
        </GridItem>
        <GridItem>
          <Content>
            <FaCalendarDays />

            <TextContainer>
              <Title>Smart Plant Care Reminders</Title>
              <Subtitle>
                Never miss a watering day with personalized care alerts for each of your green companions
              </Subtitle>
            </TextContainer>
          </Content>
        </GridItem>
        <GridItem>
          <Content>
            <TextContainer>
              <Title>Your Plant Care Companion</Title>
              <Subtitle>Access expert care tips, growth tracking, and seasonal advice for your indoor garden</Subtitle>
            </TextContainer>
          </Content>
        </GridItem>
      </Grid>
    </HeroCtaContainer>
  );
};
