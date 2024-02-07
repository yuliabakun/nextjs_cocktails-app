'use client';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import './SearchBarAside.scss';
import { ChangeEvent, useEffect, useState } from "react";

export default function SearchBarAside() {
  const [search, setSearch] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    
  }, []);

  return (
    <div className="search-form">

      <FormControl fullWidth>
        <FormLabel id="search-form">Search By</FormLabel>
        <RadioGroup
          aria-labelledby="search-form"
          onChange={(event) => setSearch(event.target.value)}
          name="search-radio-buttons"
        >
          <FormControlLabel value="title" control={<Radio />} label="Title" />
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            disabled={search !== 'title'}
          />

          <FormControlLabel value="category" control={<Radio />} label="Category" />
          <Select
            id="category-select"
            value={category}
            disabled={search !== 'category'}
          >
          </Select>

          <FormControlLabel value="ingredient" control={<Radio />} label="Ingredient" />
          <Select
            id="ingredient-select"
            value={category}
            disabled={search !== 'ingredient'}
          >
          </Select>
        </RadioGroup>
      </FormControl>
    </div>
  );
}

