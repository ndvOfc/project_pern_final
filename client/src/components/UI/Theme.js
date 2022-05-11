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
    // action: {
    //   disabledBackground: {
    //     color: '#4a4e69',
    //     opacity: 0.2,
    //   },
    //   // disabled: '#d5d4d4',
    // },

    tonalOffset: 0.1,
    contrastThreshold: 3,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: '#44B4A4',
            opacity: 0.9,
            color: '#c0c0c0',
          },
        },
      },
    },
  },
});
