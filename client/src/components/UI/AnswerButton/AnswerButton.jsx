/* eslint-disable */
import React, { useCallback, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import style from '../../BasicAssessment/BasicAssessment.module.css';

function AnswerButton({
  list,
  checked,
}) {


  const ref = useRef();
  // console.log('REF', ref.current.getAttribute('data-answ'));

  const [isCorrect, setIsCorrect] = useState();
  const [variant, setVariant] = useState('outlined');

  // Здесь пишем логику отрисовки кнопок
  const getColor = () => {
    return isCorrect ? 'success' : 'error';
  };

  console.log('getColor',getColor())
  const onClick = () => {
    setVariant('contained');
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
        color={checked ? getColor() : 'primary'}
        variant={variant}
        data-answ={list.isCorrect}
        mt={2}
        // disabled={checked}
      >
        {list.answer}
      </Button>
    </Box>
  );
}

export default AnswerButton;
