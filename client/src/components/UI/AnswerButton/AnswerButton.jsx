/* eslint-disable */
import React, { useCallback, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import style from '../../BasicAssessment/BasicAssessment.module.css';

function AnswerButton({
  list,
  checked,
  correctAnswer,
  handleCorrectAnswer,
  showAnswer,
  handleShowAnswer,
  userAnswer,
  handleUserAnswer,
}) {
  // console.log(`>>>>>>>>>>> ${list.id}`);
  const props = { color: 'primary', variant: 'outlined' };
  const getButtonColor = (showAnswer, correctAnswer, confirmed) => {};
  // console.log('>>>>>>>>>>>>> USER ANSWER ID select >>>>>>>' +  userAnswer);
  // console.log('SHOW ANSWER >>>>>>>>>>>>> '  + showAnswer)
  //   console.log('SHOW CORRECT ANSWER >>>>>>>>>>>>> ' + correctAnswer)
  const ref = useRef();
  // console.log('REF', ref.current.getAttribute('data-answ'));
  const [color, setColor] = useState();
  const [isCorrect, setIsCorrect] = useState();
  const [variant, setVariant] = useState('outlined');
  const getColor = () => {
    return isCorrect ? 'success' : 'error';
  };
  console.log('getColor',getColor())
  const onClick = () => {
    setVariant('contained');
    setIsCorrect(ref.current.getAttribute('data-answ'));
  };

  return (
    <Box mt={2}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Button
        ref={ref}
        className={style.btn}
        // onClick={() => { handleUserAnswer(list.id) ; handleShowAnswer(); handleCorrectAnswer(list.id)}
        // }
        onClick={onClick}
        size="large"
        color={checked ? getColor() : 'primary'}
        variant={variant}
        data-answ={list.isCorrect}
        mt={2}
      >
        {list.answer}
      </Button>
    </Box>
  );
}

export default AnswerButton;
