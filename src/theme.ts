'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#90CAF9',
      light: '#E3F2FD',
      dark: '#42A5F5',
    },
    secondary: {
      main: '#CE93D8',
      light: '#F3E5F5',
      contrastText: '#AB47BC',
    },
  },
});

export default theme;
