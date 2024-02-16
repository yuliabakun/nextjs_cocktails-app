import { NextResponse } from 'next/server';
import prisma from '../db';

export async function GET() {
  const allCategories = await prisma.category.findMany();

  return NextResponse.json({ allCategories }, { status: 200 });
}
