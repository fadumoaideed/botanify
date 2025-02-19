import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
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
} from '../styles/register.styles'
import { supabase } from '@/utils/supabase'
import { User } from '@/types/users'

interface FormData {
   firstName: string
   lastName: string
   email: string
   password: string
   confirmPassword: string
}

const SignupPage = () => {
   const router = useRouter()
   const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '' // TODO:Store password in hashed form with encryption key
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

      // Basic validation
      if (formData.password !== formData.confirmPassword) {
         setError('Passwords do not match')
         return
      }

      if (formData.password.length < 6) {
         setError('Password must be at least 6 characters long')
         return
      }

      try {
         if (process.env.ENV === 'production') {
            const { data, error } = await supabase.auth.signUp({
               email: formData.email,
               password: formData.password
            })

            if (error) {
               setError(error.message)
               return
            }

            if (data.user) {
               const { error: profileError } = await supabase
                  .from('users')
                  .insert([
                     {
                        id: data.user.id,
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email
                     }
                  ])

               if (profileError) {
                  setError(profileError.message)
                  return
               }
            }
         } else {
            const response = await fetch('/api/signup', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok) {
               setError(data.message || 'Failed to create account')
               return
            }
         }

         router.push('/login')
      } catch (err) {
         setError('Failed to create account')
      }
   }

   return (
      <PageContainer>
         <ImageSection>Did you know? section</ImageSection>
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
   )
}

export default SignupPage
