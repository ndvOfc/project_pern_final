/* eslint-disable react/prop-types,no-unused-vars */
import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomizedProgressBars from '../Progress/ProgressBar';

// import { Link } from 'react-router-dom';

function EndTestCard({ score, questionLength, topic, userData }) {
  const navigate = useNavigate();

  console.log(userData);

  // console.log('DATA FOR FETCH >>>>>>>>>', score, topic);

  // const fetchResults = () => {
  //   fetch('http://localhost:5001/api/modules/REACT/REACTbasicQuestions', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Credentials': true,
  //     },
  //     body: JSON.stringify({
  //          score,
  //         topic:
  //     }),
  //   });
  // };

  const percentRightAnswers = Math.floor((score / questionLength) * 100);
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: '60vw',
        display: 'flex',
        justifyContent: 'center',
        margin: '3vw auto',
        backgroundColor: '#FAE392',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: '3vw auto',
          padding: '3vw',
          fontSize: '1em',
        }}
      >
        <Typography>Тест пройден!</Typography>
        <Typography>
          Верных ответов: {score} / {percentRightAnswers}%
        </Typography>
        <CustomizedProgressBars value={percentRightAnswers} />
        <Typography>Неверных ответов: {questionLength - score}</Typography>
        <Button variant="contained" onClick={() => navigate('/modules')}>
          выбор тестов
        </Button>
      </Box>
    </Paper>
  );
}

export default EndTestCard;
