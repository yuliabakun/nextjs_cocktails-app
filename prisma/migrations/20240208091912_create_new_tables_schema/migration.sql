/*
  Warnings:

  - You are about to drop the column `drink` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `ingredient` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `measureType` on the `Ingredient` table. All the data in the column will be lost.
  - Added the required column `name` to the `Cocktail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cocktail" DROP COLUMN "drink",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "ingredient",
DROP COLUMN "measureType",
ADD COLUMN     "name" TEXT NOT NULL;
