/* eslint-disable react/prop-types,no-unused-vars */
import React, { useCallback, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import style from '../../BasicAssessment/BasicAssessment.module.css';

function AnswerButton({ list, checked, handleCorrectAnswer, setAnyAnswered }) {
  const ref = useRef();
  // console.log('REF', ref.current.getAttribute('data-answ'));

  const [isCorrect, setIsCorrect] = useState();
  const [selected, setSelected] = useState('');
  const [variant, setVariant] = useState('outlined');

  // Здесь пишем логику отрисовки кнопок
  const getColor = () => {
    if (isCorrect && selected === 'selected') {
      return 'success';
    }
    if (!isCorrect && selected === 'selected') {
      return 'error';
    }

    return 'primary';
  };

  // console.log('getColor', getColor());
  const onClick = (e) => {
    setSelected('selected');
    setAnyAnswered((prev) => !prev);
    setVariant((prev) => (prev === 'outlined' ? 'contained' : 'outlined'));
    handleCorrectAnswer(e);
    setIsCorrect(JSON.parse(ref.current.getAttribute('data-answ')));
  };

  return (
    <Box mt={2}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Button
        ref={ref}
        className={style.btn}
        onClick={onClick}
        size="large"
        // sx={{ minHeight: '6vh', fontSize: '2vw' }}
        color={checked ? getColor() : 'primary'}
        variant={variant}
        // sx={{backgroundColor: '#44B4A4', color: 'white'}}
        data-answ={list.isCorrect}
        data-selected={selected}
        mt={2}
        disabled={checked}
      >
        {list.answer}
      </Button>
    </Box>
  );
}

export default AnswerButton;
