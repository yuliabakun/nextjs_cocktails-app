import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../db';
import { Ingredient } from '@/app/shared/types/Ingredient';

export async function POST(req: NextRequest) {
  const data = await req.json();

  const {
    name,
    drinkThumb,
    categoryId,
    iba,
    alcoholic,
    glass,
    instructions,
    ingredients,
    authorId,
  } = data;

  console.log(categoryId, typeof categoryId);

  try {
    const createdCocktail = await prisma.cocktail.create({
      data: {
        name,
        drinkThumb,
        categoryId: Number(categoryId),
        iba,
        alcoholic,
        glass,
        instructions,
        ingredients: {
          createMany: {
            data: ingredients.map((item: Ingredient) => {
              return {
                name: item.name,
                measurement: item.measurement,
              }
            }),
          },
        },
        authorId,
      },
    });

    return NextResponse.json({ createdCocktail });
  } catch (error: any) {
    console.error('Error adding cocktail:', error.message);

    return NextResponse.json({ error }, { status: 500 });
  }
}
