import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWithParams } from '@/app/shared/utils/fetchClient';

export const fetchCurrentSearch = createAsyncThunk(
  'search/fetchCurrentSearch',
  async ({ searchType, searchValue }: { searchType: string; searchValue: string }) => {
    const searchData = await fetchWithParams(searchType, searchValue);

    return searchData;
  }
);

interface SearchState {
  searchType: string;
  searchValue: string;
  searchData: [];
  searchDataCount: number;
  loading: boolean;
  error: string | null;
};

const initialState: SearchState = {
  searchType: '',
  searchValue: '',
  searchData: [],
  searchDataCount: 0,
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchType(state, action) {
      state.searchType = action.payload;
      state.searchValue = '';
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    clearSearch(state) {
      state.searchType = '';
      state.searchValue = '';
      state.searchData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.searchData = action.payload.data;
        state.searchDataCount = action.payload.count;
      })
      .addCase(fetchCurrentSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const { setSearchType, setSearchValue, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
