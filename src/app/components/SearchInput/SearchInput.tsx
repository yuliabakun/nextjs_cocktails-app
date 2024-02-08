import React from 'react';
import { TextField } from '@mui/material';

type Props = {
  isDisabled: boolean,
};

export const SearchInput: React.FC<Props> = ({ isDisabled }) => {
  return (
    <TextField
      id="Title"
      name="title-input"
      variant="outlined"
      placeholder="enter title"
      disabled={isDisabled}
    />
  );
};
