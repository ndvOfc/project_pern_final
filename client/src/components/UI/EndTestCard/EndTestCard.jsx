/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function EndTestCard({ score, questionLength }) {
  return (
    <Box>
      <Typography>Тест пройден</Typography>
      <Paper>
        <Typography>Верных ответов: {score}</Typography>
        <Typography>Неверных ответов: {questionLength - score}</Typography>
      </Paper>
      <Link to="/modules">Вернуться к выбору тестов</Link>
    </Box>
  );
}

export default EndTestCard;
