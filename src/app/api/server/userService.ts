import bcrypt from 'bcrypt';
import prisma from '@/app/api/db';

export const userService = { authenticate };

async function authenticate(email: string, password: string) {
  const foundUser = await prisma.user.findUnique({
    where: { email }
  });

  if (!foundUser) { return null };

  const isPasswordMatch = await bcrypt.compare(password, foundUser.hashed_password);

  return isPasswordMatch ? foundUser : null;
};
