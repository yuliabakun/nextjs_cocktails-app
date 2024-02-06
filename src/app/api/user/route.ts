import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req, res) {
  const { email, name, password, repeatPassword } = req.body;


  if (password !== repeatPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      hashed_password: hashedPassword,
    },
  });

  await prisma.$disconnect();

  res.status(201).json({ message: "User registered successfully", user: newUser });
}
