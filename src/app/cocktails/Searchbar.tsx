'use client';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Button,
} from '@mui/material';
import {
  clearSearch,
  fetchCurrentSearch,
  setSearchType,
} from '@/app/shared/globalState/features/searchSlice';
import styles from './styles.module.scss';
import SearchInput from './SearchInput';
import SearchCategory from './SearchCategory';
import SearchIngredient from './SearchIngredient';
import { SearchParams } from '@/app/shared/types/SearchParams';
import { RootState } from '../shared/globalState/store';
import { capitalize } from '../shared/utils/functions';
import { Category } from '../shared/types/Category';

export default function Searchbar(
  { categories, ingredients }: { categories: Category[], ingredients: string[] }
) {
  const dispatch = useDispatch();
  const { searchType, searchValue } = useSelector((state: RootState) => state.search);

  const handleSubmitButtonClick = () => {
    dispatch(fetchCurrentSearch({ searchType, searchValue }) as any);
  };

  return (
    <div className={styles.searchbar}>
      <Typography variant="h5" gutterBottom>
        Search By:
      </Typography>

      <RadioGroup
        className="radio-group"
        name="search-radio-buttons"
        onChange={(event) => dispatch(setSearchType(event.target.value))}
      >
        <div className={styles.searchbar__item}>
          <FormControlLabel
            label={capitalize(SearchParams.Title)}
            value={SearchParams.Title}
            control={<Radio />}
          />

          <SearchInput isDisabled={searchType !== SearchParams.Title} />
        </div>

        <div className={styles.searchbar__item}>
          <FormControlLabel
            label={capitalize(SearchParams.Category)}
            value={SearchParams.Category}
            control={<Radio />}
          />

          <SearchCategory
            isDisabled={searchType !== SearchParams.Category}
            categories={categories}
          />
        </div>

        <div className={styles.searchbar__item}>
          <FormControlLabel
            label={capitalize(SearchParams.Ingredient)}
            value={SearchParams.Ingredient}
            control={<Radio />}
          />

          <SearchIngredient
            isDisabled={searchType !== SearchParams.Ingredient}
            ingredients={ingredients}
          />
        </div>
      </RadioGroup>

      <div className={styles.actionsGroup}>
        <Button
          variant="outlined"
          onClick={() => dispatch(clearSearch())}
        >
          Clear
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmitButtonClick}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
