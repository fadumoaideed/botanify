import { useAuth } from '@/hooks/auth-context';
import { Container, Title, Greeting } from './welcome-cta.styles';

export const WelcomeCTA = () => {
   const { user } = useAuth();

   if (!user) return null;

   const randomMorningGreeting = [
      'Good Morning',
      'Guten Morgen',
      'Buenos Dias',
      'Bonjour'
   ];
   const randomEveningGreeting = [
      'Good Evening',
      'Guten Abend',
      'Buenas Tardes',
      'Bonsoir'
   ];

   const currentHour = new Date().getHours();
   console.log(currentHour);
   const greeting =
      currentHour < 12 ? randomMorningGreeting : randomEveningGreeting;

   return (
      <Container>
         <Title>Hi {user.firstName}</Title>
         <Greeting>
            {greeting[Math.floor(Math.random() * greeting.length)]}
         </Greeting>
      </Container>
   );
};
