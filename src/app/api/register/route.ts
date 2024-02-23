import { NextRequest, NextResponse } from 'next/server';
import { uuid } from 'uuidv4';
import prisma from '../db';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const registerUserSchema = z.object({
  email: z.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, 'Email must follow format exaple@mail.com'),
  name: z.string().regex(/^[a-z0-9_-]{3,15}$/g, 'Username must contain only letters, digits, _ and - and length 3 - 15 chars.'),
  password: z.string().min(6, 'Password should be at least 6 characters long.')
})

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json();

  const { email, name, password } = registerUserSchema.parse(data);

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    return NextResponse.json({ user: null, message: 'User with following email already exist' });
  }

  const salt = 5;

  const hashed_password = await bcrypt.hash(password, salt);

  const newUser = await prisma.user.create({
    data: {
      id: uuid(),
      name,
      email,
      salt: salt.toString(),
      hashed_password,
    }
  });


  console.log(newUser);
  return NextResponse.json({ user: newUser, message: 'User created successfully' });
}