/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
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
import PropTypes from 'prop-types';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';
import { staticProfile, getAchivment } from './static';
import CardAchivment from '../CardAchivment/CardAchivment';
import CardAchiv from '../CardAchiv/CardAchiv';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Profile() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '20vh',
  }));
  const { user } = useSelector((state) => state.userReducer); // начинаем отсуюда
  console.log(user);
  const [stat, setStat] = useState(staticProfile);
  // const [  , setStat] = useState(getAchivment);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ minWidth: '90vw', margin: '20px 8px' }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>
            <CardMedia
              src={user.image}
              alt="name"
              title="name"
              sx={{ maxWidth: '40vw', objectFit: 'fill' }}
              component="img"
            />
            <CardContent sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
              <Paper elevation={4} className={style.profile_text}>
                Имя:{user.name}
              </Paper>
              <Paper elevation={4} className={style.profile_text}>
                email:{user.email}
              </Paper>
              <Paper elevation={4} className={style.profile_text}>
                Прогресс:{user.progress}
              </Paper>
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
            <Tabs
              sx={{ justifyContent: 'center' }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Статистика" {...a11yProps(0)} />
              <Tab label="Достижения" {...a11yProps(1)} />
              <Tab label="Унижения" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  margin: 'auto',
                  width: 'auto',
                  justifyContent: 'center',
                }}
                centered
              >
                {stat.map((el) => {
                  return <CardAchivment key={el.name} el={el} />;
                })}
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  margin: 'auto',
                  width: 'auto',
                  justifyContent: 'center',
                }}
              >
                {getAchivment.map((el) => (
                  <CardAchiv key={el.name} value={el} />
                ))}
              </Box>
            </TabPanel>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
