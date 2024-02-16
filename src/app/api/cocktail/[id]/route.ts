import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../db';

export async function GET(req: NextRequest, context: any) {
  const id = context.params.id;

  const cocktail = await prisma.cocktail.findFirst({
    where: {
      id: id,
    }
  });

  return NextResponse.json({ cocktail });
}
