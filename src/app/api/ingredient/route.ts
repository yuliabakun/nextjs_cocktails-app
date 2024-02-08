import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.ingredient.findMany({
    distinct: ['name'],
  });  

  const allIngredients = data.map(ingredient => ingredient.name);

  return NextResponse.json({ allIngredients }, { status: 200 });
}