import { Autocomplete, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

type Props = {
  isDisabled: boolean,
}

export const SearchIngredient: React.FC<Props> = ({ isDisabled }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/ingredient');
      const data = await response.json();

      setIngredients(data.allIngredients);
    }

    fetchData();
  }, []);

  return (
    <Autocomplete
      disablePortal
      options={ingredients}
      id="Ingredient"
      renderInput={(params) => <TextField {...params} label="Select Ingredient" />}
      disabled={isDisabled}
    />
  );
};
