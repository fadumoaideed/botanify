import React from 'react';
import { Plant } from '../../types/plant';
import { Notification } from './notification.styles';

export interface NotificationStatus {
  type: 'warning' | 'info';
  message: string;
}

interface PlantNotificationsProps {
  plant: Plant;
}

const PlantNotifications: React.FC<PlantNotificationsProps> = ({ plant }) => {
  const checkWateringStatus = (): NotificationStatus | null => {
    if (!plant.lastWaterered) return null;

    const lastWatered = new Date(plant.lastWaterered);
    const nextWatering = new Date(lastWatered);
    // Convert wateringFrequency to number explicitly
    nextWatering.setDate(lastWatered.getDate() + Number(plant.watering));

    const today = new Date();
    const daysUntilWatering = Math.ceil((nextWatering.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (daysUntilWatering === 0) {
      return {
        type: 'warning',
        message: `${plant.name} needs watering today!`,
      };
    } else if (daysUntilWatering === 2) {
      return {
        type: 'info',
        message: `${plant.name} will need watering in 2 days`,
      };
    }
    return null;
  };

  const notification = checkWateringStatus();

  return (
    <Notification>
      {notification && <div className={`notification ${notification.type}`}>{notification.message}</div>}
    </Notification>
  );
};

export default PlantNotifications;
