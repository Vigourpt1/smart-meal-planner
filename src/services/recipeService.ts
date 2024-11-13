import { Recipe, UserPreferences, MealPlan } from '../types';
import { generateMealSuggestions } from '../lib/openai';

export async function getRecipeSuggestions(preferences: UserPreferences): Promise<Recipe[]> {
  return generateMealSuggestions(preferences);
}