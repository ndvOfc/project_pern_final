/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Grid, Paper, Typography, TextField, Button, Link } from '@material-ui/core';
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

function Registration() {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const btnstyle = { margin: '8px 0' };
  // const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Регистрация</h2>
        </Grid>
        <form>
          <TextField fullWidth label="Имя" placeholder="Имя пользователя" />
          <TextField fullWidth label="Email" placeholder="Email" />
          <TextField fullWidth type="password" label="Пароль" placeholder="Введите пароль" />
          <Typography variant="caption">
            Для зарегистрированных пользователей ?<Link href="/login">Войти</Link>
          </Typography>
          <Button type="submit" variant="contained" color="primary" style={btnstyle} fullWidth>
            Регистрация
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Registration;
