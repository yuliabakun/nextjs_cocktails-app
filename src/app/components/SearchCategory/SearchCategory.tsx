import { Category } from '@/app/static/types/Category';
import { InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';

type Props = {
  isDisabled: boolean,
}

type CategoryApiResponse = {
  allCategories: Category[];
}
export const SearchCategory: React.FC<Props> = ({ isDisabled }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/category');
      const data: CategoryApiResponse = await response.json();

      setCategories(data.allCategories);
    }

    fetchData();
  }, []);

  return (
    <Select
      id="Category"
      label="Select Category"
      name="category-select"
      value={selectedCategory}
      onChange={(event) => setSelectedCategory(event.target.value)}
      disabled={isDisabled}
    >
      {categories.map(category => (
        <MenuItem
          key={category.id}
          value={category.category}
        >
          {category.category}
        </MenuItem>
      ))}
    </Select>
  );
};
