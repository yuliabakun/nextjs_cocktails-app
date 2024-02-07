import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const category = req.nextUrl.searchParams.get('category');

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

  const limitedCocktails = await prisma.cocktail.findMany({
    skip: 0,
    take: 20,
  })

  return NextResponse.json({ limitedCocktails }, { status: 200 });
}