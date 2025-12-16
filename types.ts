export enum Screen {
  HOME = 'HOME',
  JOURNAL = 'JOURNAL',
  HYDRATION = 'HYDRATION',
  JOURNEY = 'JOURNEY',
  PROFILE = 'PROFILE'
}

export enum Mood {
  ENERGIZED = 'Energized',
  NEUTRAL = 'Neutral',
  SLUGGISH = 'Sluggish',
  UNSET = 'Unset'
}

export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  portion: string;
}

export interface DailyStats {
  waterMl: number;
  calories: number;
  mood: Mood;
}