import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { setSearchValue } from '@/app/shared/globalState/features/searchSlice';

export default function SearchInput({ isDisabled }: { isDisabled: boolean }) {
  const dispatch = useDispatch();

  return (
    <TextField
      id="Title"
      name="title-input"
      variant="outlined"
      sx={{ width: 200 }}
      placeholder="Enter Title"
      disabled={isDisabled}
      onChange={(event) => dispatch(setSearchValue(event.target.value))}
    />
  );
};
