/* eslint-disable @next/next/no-img-element */
import React from 'react';
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
} from './hero-cta.styles';
import { FaCalendarDays } from 'react-icons/fa6';

export const HeroCta = () => {
  // "Did you know? Despite popular myths, snake plants can't sustain life in sealed rooms - but they're still amazing air purifiers!"
  return (
    <HeroCtaContainer>
      <Grid>
        <GridItem gridArea="a">
          <Content>
            <StyledImage src="images/snake-plant.png" alt="snake plant" />
            <TextContainer>
              <Title>Breathe Better with Plants</Title>
              <Subtitle>
                Discover nature&apos;s air purifiers that transform your home into a healthier sanctuary
              </Subtitle>
              <Button>Learn More</Button>
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
                Never miss a watering day with personalized care alerts for each of your green companions
              </Subtitle>
            </TextContainer>
          </Content>
        </GridItem>
        <GridItem gridArea="c">
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
