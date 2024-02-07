import { Ingredient } from "./Ingredient";

export type Cocktail = {
  id: string;
  drink: string;
  drinkThumb: string | null;
  imageSource: string | null;
  drinkAlternate: string | null;
  tags: string | null;
  iba: string | null;
  alcoholic: string;
  glass: string;
  instructions: string;
  ingredients: Ingredient[];
};
