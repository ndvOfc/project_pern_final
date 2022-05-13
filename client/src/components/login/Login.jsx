/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Grid, Paper, Button, TextField, Typography, Link, Box, Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { fetchLogin } from '../../redux/thunk/userAsyncAction';
import VerticalLinearStepper from '../UI/Stepper/Stepper';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

function Login() {
  // const paperStyle = { padding: 20, width: 300, margin: '20px auto' };
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
    if (status === 200) navigate('/modules/JS');
  }, [status, navigate]);

  const toGoogle = () => {
    window.open('http://localhost:5001/auth/google', '_self');
  };
  const toGitHub = () => {
    window.open('http://localhost:5001/auth/github', '_self');
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap-reverse',
          alignItems: 'start',
          justifyContent: 'center',
          marginTop: '3vh',
        }}
      >
        {/* STEPPER */}
        <Paper elevation={10} sx={{ width: '300px', padding: '1rem', margin: '7px' }}>
          <VerticalLinearStepper />
        </Paper>
        {/* LOGIN */}
        <Paper
          elevation={10}
          // style={paperStyle}
          sx={{ padding: '3vh 3vw', marginLeft: '3vw', width: '300px', margin: '7px' }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <h2>Войти</h2>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register('email', { required: 'Пожалуйста введите email' })}
              label="Почта"
              placeholder="Введите почту"
              type="text"
              fullWidth
            />
            <TextField
              sx={{ mt: 1 }}
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
            }}
          >
            <Button onClick={toGoogle} type="submit" color="secondary" variant="contained">
              <GoogleIcon />
            </Button>
            <Button
              sx={{ ml: 1 }}
              onClick={toGitHub}
              type="submit"
              color="dark"
              variant="contained"
            >
              <GitHubIcon />
            </Button>
          </Box>
          <Typography>{message}</Typography>
          <Typography sx={{ fontSize: '19px' }} mt={1}>
            Нет аккаунта? <Link href="/registration">Зарегистрироваться</Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
