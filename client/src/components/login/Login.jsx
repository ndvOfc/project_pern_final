/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

function Login() {
  const paperStyle = { padding: 20, width: 300, margin: '20px auto' };
  const btnstyle = { margin: '8px 0' };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Войти</h2>
        </Grid>
        <TextField label="Имя пользователя" placeholder="Имя пользователя" fullWidth />
        <TextField label="Пароль" placeholder="Введите пароль" type="password" fullWidth />
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
          Войти
        </Button>
        <Typography>
          <Link href="#">Забыли пароль ?</Link>
        </Typography>
        <Typography variant="caption">
          <Link href="/">Зарегистрироваться</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
