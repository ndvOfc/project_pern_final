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
  Tab,
  Tabs,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import style from './Profile.module.css';
import { staticProfile } from './static';
import CardAchivment from '../CardAchivment/CardAchivment';

function Profile() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '500px',
  }));
  const [stat, setStat] = useState(staticProfile);

  const staticProfile = [
    {
      name: 'nodeBasic',
      image: '/imagePNG/nodejs.png',
      passTask: 15,
      allTask: 50,
      progress: function prog() {
        return `${((this.passTask / this.allTask) * 100).toFixed()}%`;
      },
    },
    {
      name: 'Postgres',
      image: '/imagePNG/postgre.png',
      passTask: 10,
      allTask: 40,
      progress: function prog() {
        return `${((this.passTask / this.allTask) * 100).toFixed()}%`;
      },
    },
    {
      name: 'React',
      image: '/imagePNG/react.png',
      passTask: 15,
      allTask: 30,
      progress: function prog() {
        return `${((this.passTask / this.allTask) * 100).toFixed()}%`;
      },
    },
  ];

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
            <Item>
              {' '}
              <Tabs>
                <Tab label="Статистика" />
                <Tab label="Достижения" />
                <Tab label="Унижения" />
              </Tabs>
              <Box
                sx={{ display: 'flex', flexWrap: 'wrap', margin: 'auto', width: 'auto' }}
                centered
              >
                <Box
                  sx={{
                    padding: '30px 20px',
                    width: '50px',
                    height: '50px',
                    margin: '20px 20px',
                    border: 'dashed red',
                  }}
                >
                  dasdasd
                </Box>
                <Box
                  sx={{
                    padding: '30px 20px',
                    width: '50px',
                    height: '50px',
                    margin: '20px 20px',
                    border: 'dashed red',
                  }}
                >
                  dasdasd
                </Box>
                <Box
                  sx={{
                    padding: '30px 20px',
                    width: '50px',
                    height: '50px',
                    margin: '20px 20px',
                    border: 'dashed red',
                  }}
                >
                  <CardMedia
                    src={staticProfile.image}
                    alt="node"
                    title="Achivment"
                    component="img"
                  />
                  <Typography sx={{ fontSize: 10 }}>
                    Прогресс: {staticProfile.progress()}{' '}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: '30px 20px',
                    width: '50px',
                    height: '50px',
                    margin: '20px 20px',
                    border: 'dashed red',
                  }}
                >
                  dasdasd
                </Box>
                <Box
                  sx={{
                    padding: '30px 20px',
                    width: '50px',
                    height: '50px',
                    margin: '20px 20px',
                    border: 'dashed red',
                  }}
                >
                  dasdasd
                </Box>
                <Box
                  sx={{
                    padding: '30px 20px',
                    width: '50px',
                    height: '50px',
                    margin: '20px 20px',
                    border: 'dashed red',
                  }}
                >
                  dasdasd
                </Box>
              </Box>
            </Item>
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
