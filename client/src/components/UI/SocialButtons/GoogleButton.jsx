import React, { useState } from 'react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink, purple } from '@mui/material/colors';

function GoogleButton() {
  const [isEnter, setIsEnter] = useState(false);
  const theme = createTheme({
    palette: {
      primary: { main: purple[100] },
      secondary: pink,
    },
  });

  // const obj = {
  //   success: 'palette.primary.light',
  //   error: 'error',
  // };

  const handlerActive = () => {
    setIsEnter(true);
  };

  const handlerLeave = () => {
    setIsEnter(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Button
        onMouseEnter={handlerActive}
        onMouseLeave={handlerLeave}
        variant="outlined"
        type="submit"
        fullWidth
        color={isEnter ? 'primary' : 'secondary'}
      >
        <GoogleIcon />
      </Button>
    </ThemeProvider>
  );
}

export default GoogleButton;
