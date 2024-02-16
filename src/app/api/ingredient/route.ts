import { NextResponse } from 'next/server';
import prisma from '../db';

export async function GET() {
  const data = await prisma.ingredient.findMany({
    distinct: ['name'],
  });  

  const allIngredients = data.map(ingredient => ingredient.name);

  return NextResponse.json({ allIngredients }, { status: 200 });
}