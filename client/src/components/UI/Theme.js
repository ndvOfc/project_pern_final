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
    action: {
      disabledBackground: {
        color: '#4a4e69',
        opacity: 0.6,
      },
      disabled: '#b3b2b2',
    },

    tonalOffset: 0.1,
    contrastThreshold: 3,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-outlined': {
            // backgroundColor: 'rgba(68,180,164,0.49)',
            // color: 'white',
            border: '2px solid',
          },
        },
      },
    },
  },
});
