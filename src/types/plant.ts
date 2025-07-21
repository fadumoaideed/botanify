export enum Watering {
   daily = 'DAILY',
   weekly = 'WEEKLY',
   biweekly = 'BIWEEKLY',
   monthly = 'MONTHLY',
   fortnightly = 'FORTNIGHTLY'
}
export enum LightLevel {
   direct = 'DIRECT',
   shade = 'SHADE',
   partial = 'PARTIAL'
}

export enum Drainage {
   high = 'HIGH',
   low = 'LOW'
}

export interface Plant {
   id?: string;
   title: string;
   description?: string;
   scientificName: string;
   watering?: Watering;
   image: string;
   sunlight?: LightLevel;
   maxheight?: string;
   soilDrainage?: Drainage;
   tags?: {
      common_names?: string;
      difficulty?: number;
      toxicity?: string;
      origin?: string;
   };
}

export interface PlantCondition {
   plantId: string;
   lastWatered?: Date;
   lastFertilized?: Date;
   lastRepotted?: Date;
}

export interface MoistureSensor {
   id: string;
   moistureLevel: number;
   createdAt: Date;
   updatedAt: Date;
}
