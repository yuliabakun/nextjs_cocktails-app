import { Ingredient } from "./Ingredient";

export type Cocktail = {
  id: string;
  name: string;
  drinkThumb: string;
  categoryId: number;
  imageSource: string | null;
  drinkAlternate: string | null;
  tags: string | null;
  iba: string | null;
  alcoholic: string;
  glass: string;
  instructions: string;
  ingredients: Ingredient[];
  authorId: String | null;
};
