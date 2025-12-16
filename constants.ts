import { FoodItem } from './types';

// Palette constants (Tailwind classes reference)
export const COLORS = {
  primary: 'teal-600',
  primaryBg: 'teal-50',
  secondary: 'blue-500',
  secondaryBg: 'blue-50',
  neutral: 'stone-600',
  cardBg: 'white',
  pageBg: 'stone-100'
};

export const MOCK_RECENT_FOODS: FoodItem[] = [
  { id: '1', name: 'Oatmeal & Berries', calories: 350, portion: '1 bowl' },
  { id: '2', name: 'Grilled Chicken Salad', calories: 420, portion: '1 plate' },
  { id: '3', name: 'Green Smoothie', calories: 180, portion: '1 glass' },
  { id: '4', name: 'Almonds', calories: 160, portion: '1 handful' },
];

export const WATER_GOAL_ML = 2500;