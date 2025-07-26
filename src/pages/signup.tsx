import { useState, FormEvent } from 'react';
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
   SignInText,
   EmailVerificationNotice
} from '../styles/page/signup.styles';
import { useAuth } from '@/hooks/auth-context';

interface FormData {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   confirmPassword: string;
}

export const VerficationBanner = ({
   setVerificationBanner
}: {
   setVerificationBanner: (value: boolean) => void;
}) => {
   return (
      <EmailVerificationNotice>
         <Title>Email verification sent</Title>

         <Subtitle>Please check your email for a verification link</Subtitle>
         <Link href="/login" onClick={() => setVerificationBanner(false)}>
            Go to login
         </Link>
      </EmailVerificationNotice>
   );
};

const SignupPage = () => {
   const { signup } = useAuth();

   const [error, setError] = useState('');
   const [verificationBanner, setVerificationBanner] = useState(false);
   const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
   });

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

      const signupResponse = await signup({
         email: formData.email,
         password: formData.password,
         firstName: formData.firstName,
         lastName: formData.lastName
      });

      console.log('signupResponse', signupResponse);

      if (signupResponse?.error) {
         setError(signupResponse?.error);
      }
      if (signupResponse?.success) {
         setVerificationBanner(true);
      }
   };

   return (
      <PageContainer>
         <ImageSection />
         <Container>
            <FormContainer>
               <Title>Create your account</Title>
               <Subtitle>Start managing your plants today</Subtitle>

               {!verificationBanner && (
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
                        <Label htmlFor="confirmPassword">
                           Confirm password
                        </Label>
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
               )}
               {verificationBanner && (
                  <VerficationBanner
                     setVerificationBanner={setVerificationBanner}
                  />
               )}

               <SignInText>
                  <Link href="/login">Already have an account? Sign in</Link>
               </SignInText>
            </FormContainer>
         </Container>
      </PageContainer>
   );
};

export default SignupPage;
