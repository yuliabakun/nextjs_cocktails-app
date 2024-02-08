'use client';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import './Searchbar.scss';
import { useEffect, useState } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { SearchCategory } from "../SearchCategory/SearchCategory";
import { SearchIngredient } from "../SearchIngredient/SearchIngredient";

export default function Searchbar() {
  const [search, setSearch] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  useEffect(() => {

  }, []);

  return (
    <div className="search-form">
      <FormControl fullWidth>
        <FormLabel id="search-form">Search By:</FormLabel>
        <RadioGroup
          aria-labelledby="search-form"
          onChange={(event) => setSearch(event.target.value)}
          name="search-radio-buttons"
        >
          <FormControlLabel value="title" control={<Radio />} label="Title" />
          <SearchInput isDisabled={search !== 'title'} />
          <FormControlLabel value="category" control={<Radio />} label="Category" />

          <SearchCategory isDisabled={search !== 'category'} />

          <FormControlLabel value="ingredient" control={<Radio />} label="Ingredient" />
          <SearchIngredient isDisabled={search !== 'ingredient'}/>
        </RadioGroup>
      </FormControl>
    </div>
  );
}

