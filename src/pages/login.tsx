import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
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
  ErrorMessage,
} from '../styles/login.styles';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Add your authentication logic here
      // For example:
      // await signIn(email, password);
      router.push('/dashboard'); // TODO: Create dashboard page. Redirect after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <PageContainer>
      <ImageSection>Did you know? section</ImageSection>
      <Container>
        <FormContainer>
          <Title>Sign in to your account</Title>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>

            <Button type="submit">Sign in</Button>
          </Form>

          <SignUpText>
            <Link href="/register">Don&apos;t have an account? Sign up</Link>
          </SignUpText>
        </FormContainer>
      </Container>
    </PageContainer>
  );
};

export default LoginPage;
