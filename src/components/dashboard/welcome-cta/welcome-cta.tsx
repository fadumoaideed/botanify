import { useAuth } from '@/hooks/auth-context';
import {
   Container,
   Title,
   Greeting,
   NotificationIcon
} from './welcome-cta.styles';
import { Flex } from '@/styles/common/common.styles';
import { MdNotifications, MdNotificationsActive } from 'react-icons/md';

export const WelcomeCTA = () => {
   const { user } = useAuth();

   if (!user) return null;

   const currentHour = new Date().getHours();
   console.log(currentHour);
   const greeting = currentHour < 12 ? 'Good Morning' : 'Good Afternoon';

   // TODO: Add notification icon and create a new useReducer hook to handle the notification state
   // TODO: Create notification service to handle last watered date
   return (
      <Container>
         <Flex direction="column">
            <Title>Hi {user.firstName}!</Title>
            <Greeting>{greeting}</Greeting>
         </Flex>

         <NotificationIcon>
            <MdNotifications size={30} color="#ffffff" />
         </NotificationIcon>
         {/* <MdNotificationsActive /> */}
      </Container>
   );
};
