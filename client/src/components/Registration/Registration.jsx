/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Grid, Paper, Typography, TextField, Button, Link } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchRegistration } from '../../redux/thunk/userAsyncAction';

function Registration() {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const btnstyle = { margin: '8px 0' };

  const dispatch = useDispatch();
  // const marginTop = { marginTop: 5 };

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    dispatch(fetchRegistration(data));
  }

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Регистрация</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Имя"
            placeholder="Имя пользователя"
            {...register('name', { required: true })}
            type="text"
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Email"
            {...register('email', { required: true })}
            type="text"
          />
          <TextField
            fullWidth
            type="password"
            label="Пароль"
            placeholder="Введите пароль"
            {...register('password', { required: true })}
          />
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
