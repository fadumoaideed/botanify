import styled from '@emotion/styled';

export const PageContainer = styled.div`
   min-height: 100vh;
   display: flex;
   > div {
      flex: 1;
   }
`;

export const ImageSection = styled.div`
   flex: 1;
   background-image: url('/path-to-your-image.jpg'); // TODO:Update with your image path
   background-size: cover;
   background-position: center;
   display: none;

   @media (min-width: 1024px) {
      display: block;
   }
`;

export const Container = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #f9fafb;
   padding: 3rem 1rem;
`;

export const FormContainer = styled.div`
   max-width: 28rem;
   width: 100%;
   margin: 0 auto;
`;

export const Title = styled.h2`
   margin-top: 1.5rem;
   text-align: center;
   font-size: 1.875rem;
   font-weight: 800;
   color: #111827;
   font-family: 'Comfortaa', cursive;
`;

export const Subtitle = styled.p`
   margin-top: 0.5rem;
   text-align: center;
   color: #6b7280;
   font-size: 0.875rem;
   font-family: 'Roboto', sans-serif;
`;

export const Form = styled.form`
   margin-top: 2rem;
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
   font-family: 'Roboto', sans-serif;
`;

export const ErrorMessage = styled.div`
   color: #ef4444;
   font-size: 0.875rem;
   text-align: center;
`;

export const InputGroup = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`;

export const Label = styled.label`
   font-size: 0.875rem;
   font-weight: 500;
   font-family: 'Roboto', sans-serif;
   color: #374151;
`;

export const Input = styled.input`
   width: 100%;
   padding: 0.75rem 1rem;
   border: 1px solid #d1d5db;
   border-radius: 0.375rem;
   font-size: 0.875rem;
   font-family: 'Roboto', sans-serif;
   color: #111827;
   background-color: white;
   box-sizing: border-box;

   &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
   }

   &::placeholder {
      color: #9ca3af;
   }
`;

export const Button = styled.button`
   width: 100%;
   padding: 0.75rem 1rem;
   background-color: #3b82f6;
   color: white;
   font-size: 0.875rem;
   font-weight: 500;
   border: none;
   border-radius: 0.375rem;
   cursor: pointer;
   transition: background-color 0.2s;
   font-family: 'Roboto', sans-serif;
   margin-top: 0.5rem;

   @media (min-width: 480px) {
      margin-top: 1rem;
   }

   &:hover {
      background-color: #2563eb;
   }

   &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
   }
`;

export const SignInText = styled.div`
   margin-top: 1.5rem;
   text-align: center;
   font-size: 0.875rem;
   font-family: 'Comfortaa', cursive;

   a {
      color: #3b82f6;
      font-weight: 500;
      text-decoration: none;

      &:hover {
         color: #2563eb;
      }
   }
`;
