'use client';
import { Cocktail } from "@/app/shared/types/Cocktail";
import { useEffect, useState } from "react";

// async function getCocktailDetails(id: string) {
//   const res = await fetch(`http://localhost:3000/api/cocktail/${id}`);

//   return res.json();
// };

interface Params {
  id: string;
}

interface Props {
  params: Params;
}

export default function CocktailDetails({ params }: Props) {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const id = params.id;

  useEffect(() => {
    async function fetchCocktail(cocktailId: string) {
      const res = await fetch(`/api/cocktail/${cocktailId}`);

      const data = await res.json();

      setCocktail(data.cocktail);
    }

    fetchCocktail(id);
  }, [id]);

  return (
    <div>
      <h2>details page</h2>

      {cocktail && (
        <>
          <h2>{cocktail.id}</h2>
          <p>{cocktail.name}</p>
          <p>{cocktail.instructions}</p>
        </>
      )}
    </div>
  );
};
