/* eslint-disable no-unused-vars */
import {
  Box,
  CardMedia,
  Grid,
  Paper,
  Card,
  CardContent,
  IconButton,
  CardActions,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import style from './Profile.module.css';

function Profile() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '500px',
  }));

  return (
    <>
      <Box sx={{ padding: '30px 20px', width: 800, margin: '20px auto' }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Item>
              <CardMedia
                src="https://www.letoile.ru/upload/iblock/4f8/79892443_176515583534170_9209346605343478288_n.jpg"
                alt="name"
                title="name"
                // sx={{ height: '120px', width: 'auto' }} //ЧТО ДЕЛАТЬ С РАЗМЕРАМИ ? как зафиксировать низ?
                component="img"
              />
              <CardContent sx={{ textAlign: 'left' }}>
                <Typography className={style.profile_text}>Имя: </Typography>
                <Typography className={style.profile_text}>Рост: </Typography>
                <Typography className={style.profile_text}>Вес: </Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <LogoutIcon />
                </IconButton>
              </CardActions>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item> Statistic</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item> Statistic</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Gadosti</Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Paper elevation={10} sx={{ width: 300, margin: '20px 0' }} />
        <Paper elevation={10} sx={{ padding: '30px 20px', width: 300, margin: '20px auto' }} />
        <Paper elevation={10} sx={{ padding: '30px 20px', width: 300, margin: '20px' }} />
      </Box>
    </>
  );
}

export default Profile;
