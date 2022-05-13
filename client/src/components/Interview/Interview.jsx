/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import {
  Box,
  CardMedia,
  Paper,
  CardContent,
  Typography,
  Tab,
  Tabs,
  Container,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes, { element } from 'prop-types';
import { useSelector } from 'react-redux';
import CardInfo from './CardInfo/CardInfo';
import CardTest from './CardTest/CardTest';
import { content } from './content';
import { sobesContent } from './CardTest/sobesContent';
// import ModalCard from '../UI/Modal/Modal';
// import style from './Profile.module.css';
// import { staticProfile, getAchivment } from './static';
// import CardAchivment from '../CardAchivment/CardAchivment';
// import CardAchiv from '../CardAchiv/CardAchiv';

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

function Interview() {
  const { user } = useSelector((state) => state.userReducer); // начинаем отсуюда
  console.log(user);
  // const [stat, setStat] = useState(staticProfile);
  // const [  , setStat] = useState(getAchivment);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ margin: '2vh 2vw', display: 'flex', flexDirection: 'column' }}>
        <Paper>
          <Tabs
            sx={{ justifyContent: 'center', mb: 2 }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="О React" {...a11yProps(0)} sx={{ ml: 1 }} />
            <Tab label="Вопросы с собеседований" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  marginLeft: '2rem',
                  // width: 'auto',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
                centered
              >
                {content.map((el) => {
                  return (
                    <CardInfo
                      tittle={el.tittle}
                      intro={el.intro}
                      description={el.description}
                      img={el.img}
                    />
                  );
                })}
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  marginLeft: '2rem',
                  // width: 'auto',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
                centered
              >
                {sobesContent.map((el) => {
                  return (
                    <CardInfo
                      tittle={el.tittle}
                      intro={el.intro}
                      description={el.description}
                      img={el.img}
                    />
                  );
                })}
              </Box>
            </Box>
          </TabPanel>
        </Paper>
      </Box>
    </Container>
  );
}

export default Interview;
