/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import { Box, CardMedia, Paper, CardContent, Typography, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';
import { staticProfile, getAchivment, getAchivmentFun } from './static';
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
        <Box>
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
  const { user } = useSelector((state) => state.userReducer);
  const { modules } = useSelector((state) => state.modulesReducer);
  // console.log(modules);
  const [stat, setStat] = useState(staticProfile);
  // const [  , setStat] = useState(getAchivment);
  const [value, setValue] = React.useState(0);
  const achi = 1;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ minWidth: '90vw', margin: '2vh 2vw', display: 'flex', flexDirection: 'column' }}>
      <Paper
        sx={{
          padding: 2,
          // minWidth: '30vw',
          marginRight: 1,
          display: 'flex',
          alignItems: 'flex-start',
          mb: 1,
        }}
      >
        <CardMedia
          src={user.image}
          alt="name"
          title="name"
          // sx={{ minWidth: '30vw', objectFit: 'fill', borderRadius: '5px' }}
          sx={{ maxWidth: '30vw', borderRadius: '5px' }}
          component="img"
        />
        <Box
          sx={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
            minWidth: '40vw',
          }}
        >
          <Typography
            elevation={4}
            className={style.profile_text}
            sx={{ paddingLeft: 1, width: '100%', fontSize: '5vw' }}
          >
            {user.name}
          </Typography>
          <Typography
            elevation={4}
            className={style.profile_text}
            sx={{ paddingLeft: 1, width: '100%', fontSize: '4vw' }}
          >
            {user.email}
          </Typography>
          <Typography
            elevation={4}
            className={style.profile_text}
            sx={{ paddingLeft: 1, width: '100%', fontSize: '4vw' }}
          >
            Прогресс: {user.progress}
          </Typography>
        </Box>
      </Paper>

      <Paper>
        <Tabs
          sx={{ justifyContent: 'center' }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Статистика" {...a11yProps(0)} />
          <Tab label="Достижения" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                marginLeft: '2rem',
                // width: 'auto',
                justifyContent: 'start',
              }}
              centered
            >
              {modules.map((el) => {
                return <CardAchivment key={el.titleModules} el={el} />;
              })}
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {user.progress ? (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: 'auto',
                width: 'auto',
                justifyContent: 'center',
              }}
            >
              {getAchivmentFun(user.progress).map((el) => (
                <CardAchiv key={el.name} value={el} />
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: 'auto',
                width: 'auto',
                justifyContent: 'center',
              }}
            >
              {' '}
              У вас нет достижений
            </Box>
          )}
          {/* </Box> */}
        </TabPanel>
      </Paper>
    </Box>
  );
}

export default Profile;
