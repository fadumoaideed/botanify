import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
   PageContainer,
   ImageSection,
   Container,
   FormContainer,
   Title,
   Subtitle,
   ErrorMessage,
   InputGroup,
   Label,
   Input,
   Button,
   SignInText
} from '../styles/register.styles';
import { supabase } from '@/utils/supabase';
import { useAuth } from '@/hooks/auth-context';
import { Carousel } from '@/components/carousel/carousel';

interface FormData {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   confirmPassword: string;
}

const SignupPage = () => {
   const router = useRouter();
   const { signup } = useAuth();
   const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '' // TODO:Store password in hashed form with encryption key
   });
   const [error, setError] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value
      }));
   };

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setError('');

      // Basic validation
      if (formData.password !== formData.confirmPassword) {
         setError('Passwords do not match');
         return;
      }

      if (formData.password.length < 6) {
         setError('Password must be at least 6 characters long');
         return;
      }

      const error = await signup({
         email: formData.email,
         password: formData.password,
         firstName: formData.firstName,
         lastName: formData.lastName
      });

      if (error) setError(error);
   };

   return (
      <PageContainer>
         {/* <Carousel /> */}
         <div>Hello</div>
         <Container>
            <FormContainer>
               <Title>Create your account</Title>
               <Subtitle>Start managing your plants today</Subtitle>

               <form onSubmit={handleSubmit}>
                  {error && <ErrorMessage>{error}</ErrorMessage>}

                  <div className="grid grid-cols-2 gap-4">
                     <InputGroup>
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                           id="firstName"
                           name="firstName"
                           type="text"
                           required
                           value={formData.firstName}
                           onChange={handleChange}
                        />
                     </InputGroup>

                     <InputGroup>
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                           id="lastName"
                           name="lastName"
                           type="text"
                           required
                           value={formData.lastName}
                           onChange={handleChange}
                        />
                     </InputGroup>
                  </div>

                  <InputGroup>
                     <Label htmlFor="email">Email address</Label>
                     <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                     />
                  </InputGroup>

                  <InputGroup>
                     <Label htmlFor="password">Password</Label>
                     <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                     />
                  </InputGroup>

                  <InputGroup>
                     <Label htmlFor="confirmPassword">Confirm password</Label>
                     <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                     />
                  </InputGroup>

                  <Button type="submit">Create account</Button>
               </form>

               <SignInText>
                  <Link href="/login">Already have an account? Sign in</Link>
               </SignInText>
            </FormContainer>
         </Container>
      </PageContainer>
   );
};

export default SignupPage;
