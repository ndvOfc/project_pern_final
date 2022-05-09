/* eslint-disable react/prop-types,no-unused-vars */
import React, { useCallback, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import style from '../../BasicAssessment/BasicAssessment.module.css';

function AnswerButton({ list, handleCorrectAnswer }) {
  const [option, setOption] = useState(false);
  const [selected, setSelected] = useState('');

  const selectOption = (e) => {
    setOption((prev) => !prev);
    setSelected((prev) => (prev === 'selected' ? '' : 'selected'));
    e.target.dataset.selected = selected;
    console.log(e.target);
  };

  console.log();
  return (
    <Box mt={2}>
      <Button
        className={style.btn}
        size="large"
        variant={option ? 'contained' : 'outlined'}
        onClick={(e) => {
          selectOption(e);
        }}
        data-selected={selected}
        data-check={list.isCorrect.toString()}
        mt={2}
      >
        <Typography>{list.answer}</Typography>
      </Button>
    </Box>
  );
}

export default AnswerButton;
