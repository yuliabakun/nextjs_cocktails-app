'use server';
import { NextResponse } from "next/server";
import fs from 'fs';

export async function GET() {
  const pathToFile = 'E:/julia/projects/pet/nextjs_cocktails-app/public/cocktailsData.json';

  function readData(path: string) {
    try {
      const data = fs.readFileSync(path, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  function modifyData(data) {
    const modifiedCocktails = data.map(cocktail => {
      const modifiedCocktail = {
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        drinkThumb: cocktail.strDrinkThumb,
        imageSource: cocktail.strImageSource,
        drinkAlternate: cocktail.strDrinkAlternate,
        tags: cocktail.strTags,
        category: cocktail.strCategory,
        iba: cocktail.strIBA,
        alcoholic: cocktail.strAlcoholic,
        glass: cocktail.strGlass,
        instructions: cocktail.strInstructions,
        ingredients: [],
      };


      for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measurement = cocktail[`strMeasure${i}`];

        if (ingredient && measurement) {
          modifiedCocktail.ingredients.push({
            name: ingredient,
            measure: measurement.trim(),
          });
        }
      }

      return modifiedCocktail;
    })

    return modifiedCocktails;
  }

  return NextResponse.json({ message: 'Endpoint to modify data' }, { status: 200 });
}
