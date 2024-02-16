import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Category } from '@/app/shared/types/Category';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { setSearchValue } from '@/app/shared/globalState/features/searchSlice';

export default function SearchCategory(
  { isDisabled, categories }: { isDisabled: boolean, categories: Category[] }
) {
  const dispatch = useDispatch();
  const [visibleCategory, setVisibleCategory] = useState('');

  const handleChange = (value: string) => {
    setVisibleCategory(value);
    dispatch(setSearchValue(value));
  }

  return (
    <FormControl>
      <InputLabel id="category-select">Select Category</InputLabel>

      <Select
        label="Select Category"
        id="simple-category-select"
        labelId="category-select"
        sx={{ width: 200 }}
        value={visibleCategory}
        disabled={isDisabled}
        onChange={event => handleChange(event.target.value)}
      >
        {categories.map(category => (
          <MenuItem
            key={category.id}
            value={category.id}
          >
            {category.category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
