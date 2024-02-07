'use server';
import { NextResponse } from "next/server";
import fs from 'fs';

export async function GET() {
  function readData() {
    try {
      const data = fs.readFileSync('E:/julia/projects/pet/nextjs_cocktails-app/public/predata.json', 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const cocktails = readData();

  return NextResponse.json({ cocktails }, { status: 200 });
}
