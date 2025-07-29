import { DashboardContainer } from '@/styles/page/dashboard.styles';
import { WelcomeCTA } from '@/components/dashboard/welcome-cta/welcome-cta';
import React from 'react';
import { useAuth } from '@/hooks/auth-context';
import { DidYouKnow } from '@/components/dashboard/did-you-know/did-you-know';
import { ActionCenter } from '@/components/dashboard/action-center/action-center';
import { PlantList } from '@/components/dashboard/plants/plants';

export default function Dashboard() {
   const { isAuthenticated } = useAuth();

   if (!isAuthenticated) {
      return (
         <DashboardContainer>
            <div>Loading...</div>
         </DashboardContainer>
      );
   }

   return (
      <DashboardContainer>
         <WelcomeCTA />
         <DidYouKnow />
         <ActionCenter />
         <PlantList />
      </DashboardContainer>
   );
}

//TODO: Add user dashboard with the plants they have bought
//top section for plants that need attention
//bottom section for plants that are doing well
//add a button to add a new plant
//add a button to add a new plant
//Calendar integration
