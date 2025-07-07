import styled from '@emotion/styled';

export const OverlayContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   backdrop-filter: blur(5px);
   z-index: 1;
`;

export const CardContainer = styled.div`
   box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
   padding: 50px 0;
   background-color: #fff;
   border-radius: 30px;
   width: 100%;
   height: auto;
   max-height: 80vh;
   overflow-y: auto;
   @media (min-width: 375px) {
      width: 100%;
   }

   @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      height: 500px;
      width: 700px;
      padding: 30px;
   }
`;

export const ContentContainer = styled.div`
   display: flex;
   gap: 30px;
   height: 100%;

   @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
   }
`;

export const CloseButton = styled.button`
   position: absolute;
   top: 15px;
   right: 20px;
   background: none;
   border: none;
   font-size: 1.2rem;
   cursor: pointer;
   color: rgb(58, 81, 62);
   padding: 5px 10px;
   border-radius: 5px;

   &:hover {
      background-color: #f0f0f0;
   }
`;

export const ImageSection = styled.div`
   flex-shrink: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const CardImage = styled.img`
   object-fit: cover;
   border-radius: 15px;
   aspect-ratio: 1/1;
   height: 250px;
   width: 250px;

   @media (max-width: 768px) {
      height: 200px;
      width: 200px;
   }
`;

export const ImageContainer = styled.div`
   border-radius: 15px;
   overflow: hidden;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const ContentSection = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 15px;
   overflow-y: auto;
   padding: 0 30px;

   @media (max-width: 768px) {
      margin: 20px;
   }

   @media (min-width: 769px) {
      padding: 0 30px;
   }
`;

export const Title = styled.h2`
   margin: 0;
   font-size: 2rem;
   font-weight: 400;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
   line-height: 1.2;
`;

export const ScientificName = styled.h3`
   margin: 0;
   font-size: 1.2rem;
   font-weight: 300;
   font-style: italic;
   font-family: Roboto, sans-serif;
   color: rgb(100, 120, 100);
`;

export const Description = styled.p`
   margin: 0;
   font-size: 1rem;
   line-height: 1.5;
   font-weight: 300;
   font-family: Roboto, sans-serif;
   color: rgb(58, 81, 62);
`;

export const DetailItem = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 8px 0;
   border-bottom: 1px solid #f0f0f0;

   &:last-child {
      border-bottom: none;
   }
`;

export const DetailLabel = styled.span`
   font-weight: 500;
   color: rgb(58, 81, 62);
   font-family: Roboto, sans-serif;
`;

export const DetailValue = styled.span`
   color: rgb(100, 120, 100);
   font-family: Roboto, sans-serif;
   text-transform: capitalize;
`;

export const TagsContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

export const Tag = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 5px 0;
   font-size: 0.9rem;
`;

export const TagLabel = styled.span`
   font-weight: 500;
   color: rgb(58, 81, 62);
   font-family: Roboto, sans-serif;
`;

export const TagValue = styled.span`
   color: rgb(100, 120, 100);
   font-family: Roboto, sans-serif;
`;

export const ContentText = styled.div``;

export const DetailsSection = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   margin-top: 10px;
`;
