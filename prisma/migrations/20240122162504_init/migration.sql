-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,
    "liked" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "refresh_token" TEXT,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cocktail" (
    "idDrink" SERIAL NOT NULL,
    "strDrink" TEXT NOT NULL,
    "strDrinkAlternate" TEXT,
    "strTags" TEXT NOT NULL,
    "strVideo" TEXT,
    "strCategory" TEXT NOT NULL,
    "strIBA" TEXT NOT NULL,
    "strAlcoholic" TEXT NOT NULL,
    "strGlass" TEXT NOT NULL,
    "strInstructions" TEXT NOT NULL,
    "strInstructionsES" TEXT,
    "strInstructionsDE" TEXT NOT NULL,
    "strInstructionsFR" TEXT,
    "strInstructionsIT" TEXT NOT NULL,
    "strInstructionsZH_HANS" TEXT,
    "strInstructionsZH_HANT" TEXT,
    "strDrinkThumb" TEXT NOT NULL,
    "strIngredient1" TEXT NOT NULL,
    "strIngredient2" TEXT NOT NULL,
    "strIngredient3" TEXT NOT NULL,
    "strIngredient4" TEXT,
    "strIngredient5" TEXT,
    "strIngredient6" TEXT,
    "strIngredient7" TEXT,
    "strIngredient8" TEXT,
    "strIngredient9" TEXT,
    "strIngredient10" TEXT,
    "strIngredient11" TEXT,
    "strIngredient12" TEXT,
    "strIngredient13" TEXT,
    "strIngredient14" TEXT,
    "strIngredient15" TEXT,
    "strMeasure1" TEXT NOT NULL,
    "strMeasure2" TEXT NOT NULL,
    "strMeasure3" TEXT NOT NULL,
    "strMeasure4" TEXT,
    "strMeasure5" TEXT,
    "strMeasure6" TEXT,
    "strMeasure7" TEXT,
    "strMeasure8" TEXT,
    "strMeasure9" TEXT,
    "strMeasure10" TEXT,
    "strMeasure11" TEXT,
    "strMeasure12" TEXT,
    "strMeasure13" TEXT,
    "strMeasure14" TEXT,
    "strMeasure15" TEXT,
    "strImageSource" TEXT NOT NULL,
    "strImageAttribution" TEXT NOT NULL,
    "strCreativeCommonsConfirmed" TEXT NOT NULL,
    "dateModified" TEXT NOT NULL,

    CONSTRAINT "Cocktail_pkey" PRIMARY KEY ("idDrink")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
