import { PrismaClient } from "@prisma/client";
import fs from 'fs';

const prisma = new PrismaClient();

function readData(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function main() {
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
          name: cocktailData.name,
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
            name: ingredientData.name,
            measurement: ingredientData.measure,
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
