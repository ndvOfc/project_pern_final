/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Grid, Paper, Button, TextField, Typography, Link } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { purple } from '@mui/material/colors';
import { fetchLogin } from '../../redux/thunk/userAsyncAction';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

function Login() {
  const paperStyle = { padding: 20, width: 300, margin: '20px auto' };
  const btnstyle = { margin: '8px 0' };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { message, status } = useSelector((state) => state.userReducer);
  // console.log(status);
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  function onSubmit(data) {
    dispatch(fetchLogin(data));
  }
  useEffect(() => {
    if (status === 200) navigate('/modules/JavaScript');
  }, [status, navigate]);

  // testing passport js
  const toGoogle = () => {
    // после это должно быть в санке наверное - пока тут
    window.open('http://localhost:5001/auth/google', '_self');
  };
  const toGitHub = () => {
    window.open('http://localhost:5001/auth/github', '_self');
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Войти</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('email', { required: 'Пожалуйста введите email' })}
            label="Почта"
            placeholder="Введите почту"
            type="text"
            fullWidth
          />
          <TextField
            {...register('password', { required: 'Пожалуйста введите свой пароль' })}
            label="Пароль"
            placeholder="Введите пароль"
            type="password"
            fullWidth
          />
          <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
            Войти
          </Button>
        </form>
        <Button
          onClick={toGoogle}
          type="submit"
          color="secondary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          GOOGLE
        </Button>
        <Button
          onClick={toGitHub}
          type="submit"
          color="default"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          GitHub
        </Button>
        <Typography>{message}</Typography>

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
