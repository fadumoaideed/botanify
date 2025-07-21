import { useState, FormEvent } from 'react';
import Link from 'next/link';
import {
   PageContainer,
   ImageSection,
   Container,
   FormContainer,
   Title,
   Form,
   InputGroup,
   Label,
   Input,
   Button,
   SignUpText,
   ErrorMessage
} from '../styles/login.styles';
import bcrypt from 'bcryptjs';
import { useAuth } from '../hooks/auth-context';

interface FormData {
   email: string;
   password: string;
}

const LoginPage = () => {
   const { login } = useAuth();
   const [formData, setFormData] = useState<FormData>({
      email: '',
      password: ''
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

      const error = await login(formData.email, formData.password);
      if (error) setError(error);
   };

   return (
      <PageContainer>
         <ImageSection />
         <Container>
            <FormContainer>
               <Title>Log in to your account</Title>
               <Form onSubmit={handleSubmit}>
                  {error && <ErrorMessage>{error}</ErrorMessage>}

                  <InputGroup>
                     <Label htmlFor="email">Email address</Label>
                     <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
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
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                     />
                  </InputGroup>

                  <Button type="submit">Login</Button>
               </Form>

               <SignUpText>
                  <Link href="/signup">
                     Don&apos;t have an account? Sign up
                  </Link>
               </SignUpText>
            </FormContainer>
         </Container>
      </PageContainer>
   );
};

export default LoginPage;
