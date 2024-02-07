/*
  Warnings:

  - The primary key for the `Cocktail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dateModified` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `idDrink` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strAlcoholic` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strCategory` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strCreativeCommonsConfirmed` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strDrink` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strDrinkAlternate` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strDrinkThumb` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strGlass` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIBA` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strImageAttribution` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strImageSource` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient1` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient10` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient11` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient12` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient13` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient14` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient15` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient2` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient3` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient4` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient5` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient6` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient7` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient8` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredient9` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strInstructions` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strInstructionsDE` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strInstructionsES` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strInstructionsFR` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strInstructionsIT` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strInstructionsZH_HANS` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strInstructionsZH_HANT` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure1` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure10` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure11` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure12` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure13` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure14` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure15` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure2` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure3` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure4` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure5` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure6` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure7` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure8` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strMeasure9` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strTags` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `strVideo` on the `Cocktail` table. All the data in the column will be lost.
  - Added the required column `alcoholic` to the `Cocktail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Cocktail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drink` to the `Cocktail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drinkThumb` to the `Cocktail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `glass` to the `Cocktail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Cocktail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructions` to the `Cocktail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cocktail" DROP CONSTRAINT "Cocktail_pkey",
DROP COLUMN "dateModified",
DROP COLUMN "idDrink",
DROP COLUMN "strAlcoholic",
DROP COLUMN "strCategory",
DROP COLUMN "strCreativeCommonsConfirmed",
DROP COLUMN "strDrink",
DROP COLUMN "strDrinkAlternate",
DROP COLUMN "strDrinkThumb",
DROP COLUMN "strGlass",
DROP COLUMN "strIBA",
DROP COLUMN "strImageAttribution",
DROP COLUMN "strImageSource",
DROP COLUMN "strIngredient1",
DROP COLUMN "strIngredient10",
DROP COLUMN "strIngredient11",
DROP COLUMN "strIngredient12",
DROP COLUMN "strIngredient13",
DROP COLUMN "strIngredient14",
DROP COLUMN "strIngredient15",
DROP COLUMN "strIngredient2",
DROP COLUMN "strIngredient3",
DROP COLUMN "strIngredient4",
DROP COLUMN "strIngredient5",
DROP COLUMN "strIngredient6",
DROP COLUMN "strIngredient7",
DROP COLUMN "strIngredient8",
DROP COLUMN "strIngredient9",
DROP COLUMN "strInstructions",
DROP COLUMN "strInstructionsDE",
DROP COLUMN "strInstructionsES",
DROP COLUMN "strInstructionsFR",
DROP COLUMN "strInstructionsIT",
DROP COLUMN "strInstructionsZH_HANS",
DROP COLUMN "strInstructionsZH_HANT",
DROP COLUMN "strMeasure1",
DROP COLUMN "strMeasure10",
DROP COLUMN "strMeasure11",
DROP COLUMN "strMeasure12",
DROP COLUMN "strMeasure13",
DROP COLUMN "strMeasure14",
DROP COLUMN "strMeasure15",
DROP COLUMN "strMeasure2",
DROP COLUMN "strMeasure3",
DROP COLUMN "strMeasure4",
DROP COLUMN "strMeasure5",
DROP COLUMN "strMeasure6",
DROP COLUMN "strMeasure7",
DROP COLUMN "strMeasure8",
DROP COLUMN "strMeasure9",
DROP COLUMN "strTags",
DROP COLUMN "strVideo",
ADD COLUMN     "alcoholic" TEXT NOT NULL,
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "drink" TEXT NOT NULL,
ADD COLUMN     "drinkAlternate" TEXT,
ADD COLUMN     "drinkThumb" TEXT NOT NULL,
ADD COLUMN     "glass" TEXT NOT NULL,
ADD COLUMN     "iba" TEXT,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "imageSource" TEXT,
ADD COLUMN     "instructions" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT,
ADD CONSTRAINT "Cocktail_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "ingredient" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "measureType" TEXT NOT NULL,
    "cocktailId" TEXT,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cocktail" ADD CONSTRAINT "Cocktail_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_cocktailId_fkey" FOREIGN KEY ("cocktailId") REFERENCES "Cocktail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
