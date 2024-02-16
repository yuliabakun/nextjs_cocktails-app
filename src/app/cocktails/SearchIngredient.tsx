import { useDispatch } from 'react-redux';
import { Autocomplete, TextField } from '@mui/material';
import { setSearchValue } from '@/app/shared/globalState/features/searchSlice';

export default function SearchIngredient(
  { isDisabled, ingredients }: { isDisabled: boolean, ingredients: string[] }
) {
  const dispatch = useDispatch();

  return (
    <Autocomplete
      id="Ingredient"
      disablePortal
      sx={{ width: 200 }}
      options={ingredients}
      disabled={isDisabled}
      onChange={(event, value) => dispatch(setSearchValue(value))}
      renderInput={(params) => <TextField {...params} label="Select Ingredient" />}
    />
  );
};
