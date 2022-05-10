/*  Color theme  */
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#44B4A4',
      contrastText: '#ffffff',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    secondary: {
      main: '#D85A55',
    },
    bgPaper: {
      main: '#FAE392',
    },
    dark: {
      main: '#4a4e69',
      contrastText: '#fff',
    },
    tonalOffset: 0.1,
    contrastThreshold: 3,
  },
});
