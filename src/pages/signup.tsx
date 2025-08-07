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
         <h2>Check your email</h2>
         <p>
            We&apos;ve sent a verification link to your email address. Please
            check your inbox and click the link to verify your account.
         </p>
         <button onClick={() => setVerificationBanner(false)}>
            Back to login
         </button>
      </EmailVerificationNotice>
   );
};

const SignupPage = () => {
   const { signup } = useAuth();
   const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
   });
   const [error, setError] = useState('');
   const [verificationBanner, setVerificationBanner] = useState(false);
   const [validationErrors, setValidationErrors] = useState<{
      [key: string]: string;
   }>({});

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value
      }));

      // Clear validation error when user starts typing
      if (validationErrors[name]) {
         setValidationErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
         });
      }
   };

   const validateForm = (): boolean => {
      const errors: { [key: string]: string } = {};

      if (formData.password !== formData.confirmPassword) {
         errors.confirmPassword = 'Passwords do not match';
      }

      if (formData.password.length < 6) {
         errors.password = 'Password must be at least 6 characters long';
      }

      setValidationErrors(errors);
      return Object.keys(errors).length === 0;
   };

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setError('');

      if (!validateForm()) {
         return;
      }

      const response = await signup({
         email: formData.email,
         password: formData.password,
         firstName: formData.firstName,
         lastName: formData.lastName
      });

      if (response?.error) {
         setError(response.error);
      } else {
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
                  <form onSubmit={handleSubmit} noValidate>
                     {error && (
                        <ErrorMessage
                           role="alert"
                           aria-live="polite"
                           aria-atomic="true"
                           id="signup-error"
                        >
                           {error}
                        </ErrorMessage>
                     )}

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
                              aria-describedby={
                                 error ? 'signup-error' : undefined
                              }
                              aria-invalid={error ? 'true' : 'false'}
                              autoComplete="given-name"
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
                              aria-describedby={
                                 error ? 'signup-error' : undefined
                              }
                              aria-invalid={error ? 'true' : 'false'}
                              autoComplete="family-name"
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
                           aria-describedby={error ? 'signup-error' : undefined}
                           aria-invalid={error ? 'true' : 'false'}
                           autoComplete="email"
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
                           aria-describedby={
                              validationErrors.password
                                 ? 'password-error'
                                 : error
                                 ? 'signup-error'
                                 : 'password-help'
                           }
                           aria-invalid={
                              validationErrors.password || error
                                 ? 'true'
                                 : 'false'
                           }
                           autoComplete="new-password"
                        />
                        <div id="password-help" className="sr-only">
                           Password must be at least 6 characters long
                        </div>
                        {validationErrors.password && (
                           <div
                              id="password-error"
                              role="alert"
                              aria-live="polite"
                           >
                              {validationErrors.password}
                           </div>
                        )}
                     </InputGroup>

                     <InputGroup>
                        <Label htmlFor="confirmPassword">
                           Confirm Password
                        </Label>
                        <Input
                           id="confirmPassword"
                           name="confirmPassword"
                           type="password"
                           required
                           value={formData.confirmPassword}
                           onChange={handleChange}
                           aria-describedby={
                              validationErrors.confirmPassword
                                 ? 'confirm-password-error'
                                 : error
                                 ? 'signup-error'
                                 : undefined
                           }
                           aria-invalid={
                              validationErrors.confirmPassword || error
                                 ? 'true'
                                 : 'false'
                           }
                           autoComplete="new-password"
                        />
                        {validationErrors.confirmPassword && (
                           <div
                              id="confirm-password-error"
                              role="alert"
                              aria-live="polite"
                           >
                              {validationErrors.confirmPassword}
                           </div>
                        )}
                     </InputGroup>

                     <Button type="submit">Create Account</Button>
                  </form>
               )}

               {verificationBanner && (
                  <VerficationBanner
                     setVerificationBanner={setVerificationBanner}
                  />
               )}

               {!verificationBanner && (
                  <SignInText>
                     <Link href="/login">Already have an account? Sign in</Link>
                  </SignInText>
               )}
            </FormContainer>
         </Container>
      </PageContainer>
   );
};

export default SignupPage;
