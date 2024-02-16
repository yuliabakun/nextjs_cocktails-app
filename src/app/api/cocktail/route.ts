import { NextRequest, NextResponse } from 'next/server';
import prisma from '../db';

export async function GET(req: NextRequest) {
  const title = req.nextUrl.searchParams.get('title');
  const category = req.nextUrl.searchParams.get('category');
  const ingredient = req.nextUrl.searchParams.get('ingredient');

  if (title) {
    const cocktailsWithTitle = await prisma.cocktail.findMany({
      where: {
        name: {
          contains: title,
          mode: 'insensitive',
        }
      }
    });

    return NextResponse.json({
      count: cocktailsWithTitle.length,
      data: cocktailsWithTitle,
    }, { status: 200 });
  }

  if (category) {
    const cocktailsInCategory = await prisma.cocktail.findMany({
      where: {
        categoryId: Number(category),
      },
    });

    return NextResponse.json({
      count: cocktailsInCategory.length,
      data: cocktailsInCategory,
    }, { status: 200 });
  }

  if (ingredient) {
    const ingredients = await prisma.ingredient.findMany({
      where: {
        name: ingredient,
      }
    });

    const cocktailsId = ingredients.map(item => item.cocktailId);

    const cocktails = await prisma.cocktail.findMany({
      where: {
        id: {
          in: cocktailsId,
        }
      }
    })

    return NextResponse.json({
      count: cocktails.length,
      data: cocktails,
    }, { status: 200 });
  }

  const data = await prisma.cocktail.findMany({
    skip: 0,
    take: 20,
  });

  return NextResponse.json({ data }, { status: 200 });
}
