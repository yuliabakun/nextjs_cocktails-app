import { PrismaClient } from "@prisma/client";
import fs from 'fs';

const prisma = new PrismaClient();

function readData() {
  try {
    const data = fs.readFileSync('E:/julia/projects/pet/nextjs_cocktails-app/public/predata.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function main() {
  const dataToMigrate = readData();

  try {
    await prisma.ingredient.deleteMany({});
    await prisma.cocktail.deleteMany({});

    for (const cocktailData of dataToMigrate) {
      const category = await prisma.category.findFirst({
        where: { category: cocktailData.category },
      });

      const cocktail = await prisma.cocktail.create({
        data: {
          id: cocktailData.id,
          drink: cocktailData.drink,
          drinkThumb: cocktailData.drinkThumb,
          imageSource: cocktailData.imageSource,
          drinkAlternate: cocktailData.drinkAlternate,
          tags: cocktailData.tags,
          categoryId: category.id,
          iba: cocktailData.iba,
          alcoholic: cocktailData.alcoholic,
          glass: cocktailData.glass,
          instructions: cocktailData.instructions,
        },
      });

      for (const ingredientData of cocktailData.ingredients) {
        await prisma.ingredient.create({
          data: {
            ingredient: ingredientData.ingredient,
            measurement: ingredientData.measurement,
            measureType: ingredientData.measureType || 'oz',
            cocktailId: cocktail.id,
          },
        });
      }
    }

    console.log("success");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
