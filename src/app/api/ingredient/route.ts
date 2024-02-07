import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const allIngredients = await prisma.ingredient.findMany({
    distinct: ['ingredient'],
  });

  const data = allIngredients.map(ingredient => ingredient.ingredient);

  return NextResponse.json({ data }, { status: 200 });
}