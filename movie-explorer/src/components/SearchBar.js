import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  return (
    <TextField
      fullWidth
      label="Search movies"
      onChange={(e) => onSearch(e.target.value)}
      variant="outlined"
      margin="normal"
    />
  );
};

export default SearchBar;
