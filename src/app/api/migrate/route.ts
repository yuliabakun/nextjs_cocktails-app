'use server';
import { NextResponse } from "next/server";
import fs from 'fs';

export async function GET() {
  function readData() {
    try {
      const data = fs.readFileSync('E:/julia/projects/pet/nextjs_cocktails-app/public/predata.json', 'utf-8');
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
        drink: cocktail.strDrink,
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
          const [value, measureType] = measurement.trim().split(' ');

          modifiedCocktail.ingredients.push({
            ingredient,
            measurement: value,
            measureType,
          });
        }
      }

      return modifiedCocktail;
    })

    return modifiedCocktails;
  }

  const cocktails = readData();

  return NextResponse.json({ cocktails }, { status: 200 });
}
