import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
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
} from '../styles/login.styles'
import bcrypt from 'bcryptjs'
import { useAuth } from '../hooks/auth-context'

interface FormData {
   email: string
   password: string
}

const LoginPage = () => {
   const { login, user, router } = useAuth()
   const [formData, setFormData] = useState<FormData>({
      email: '',
      password: ''
   })
   const [error, setError] = useState('')

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({
         ...prev,
         [name]: value
      }))
   }

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      setError('')

      try {
         const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               email: formData.email,
               password: formData.password
            })
         })
         const data = await response.json()

         if (data.token) {
            login(data.token)
            setUser(data.user)
         } else {
            setError(data.message || 'Login failed')
         }
      } catch (err) {
         setError('Invalid email or password')
      }
   }

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

                  <Button type="submit">Sign in</Button>
               </Form>

               <SignUpText>
                  <Link href="/register">
                     Don&apos;t have an account? Sign up
                  </Link>
               </SignUpText>
            </FormContainer>
         </Container>
      </PageContainer>
   )
}

export default LoginPage
