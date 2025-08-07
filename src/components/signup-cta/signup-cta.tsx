import router from 'next/router';
import {
   VideoContainer,
   Container,
   Video,
   Title,
   Content,
   Description,
   Button
} from './signup-cta.styles';
import React, { useRef, useEffect } from 'react';

export const SignupCTA = () => {
   const videoRef = useRef<HTMLVideoElement>(null);

   useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const observer = new window.IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               video.play();
            } else {
               video.pause();
            }
         },
         { threshold: 0.5 } // Play when 50% visible, adjust as needed
      );

      observer.observe(video);

      return () => {
         observer.unobserve(video);
      };
   }, []);

   return (
      <Container>
         <VideoContainer>
            <Video
               ref={videoRef}
               muted
               playsInline
               autoPlay
               aria-label="Video showing plant potting and care process"
            >
               <source src="/potting.mp4" type="video/mp4" />
               <track
                  kind="captions"
                  src="/potting-captions.vtt"
                  srcLang="en"
                  label="English"
                  default
               />
               Your browser does not support the video tag.
            </Video>
         </VideoContainer>
         <Content>
            <Title>Transform Your Plant Care Journey</Title>
            <Description>
               Join thousands of plant parents who are growing their green thumb
               with Botanify and connect with a community of plant lovers.
            </Description>
            <Button
               onClick={() => router.push('/signup')}
               aria-label="Sign up to start your plant care journey"
            >
               Start Growing Today
            </Button>
         </Content>
      </Container>
   );
};
