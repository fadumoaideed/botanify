import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CarouselContainer = styled.div`
   position: relative;
   height: 400px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px;
   flex: 1;

   &:only-child {
      font-size: 1rem;
   }
`;

export const CarouselTrack = styled(motion.div)`
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const PlantCard = styled(motion.div)`
   position: absolute;
   width: 280px;
   height: 350px;
   background: white;
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;

   img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      margin-bottom: 16px;
   }

   h3 {
      font-size: 1.5rem;
      margin: 8px 0;
      color: #333;
   }

   p {
      font-size: 0.9rem;
      color: #666;
      text-align: center;
   }
`;
