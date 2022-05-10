/* eslint-disable no-unused-vars,no-shadow */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Parser from 'html-react-parser';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import style from './BasicAssessment.module.css';
import { getQuestions } from '../../redux/thunk/assesmentAsyncAction';
import { getTopics } from '../../redux/thunk/moduleAsyncAction';
import AnswerButton from '../UI/AnswerButton/AnswerButton';

function BasicAssessment() {
  // const [progress, setProgress] = React.useState(0);
  // const [buffer, setBuffer] = React.useState(20);
  //
  // const progressRef = React.useRef(() => {});
  // React.useEffect(() => {
  //   progressRef.current = () => {
  //     if (progress > 100) {
  //       setProgress(0);
  //       setBuffer(10);
  //     } else {
  //       const diff = Math.random() * 10;
  //       const diff2 = Math.random() * 10;
  //       setProgress(progress + diff);
  //       setBuffer(progress + diff + diff2);
  //     }
  //   };
  // });
  //
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     progressRef.current();
  //   }, 1500);
  //
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const params = useParams();
  const dispatch = useDispatch();
  const { moduleTopics, topic } = params;
  const { questionList } = useSelector((state) => state.questionsReducer);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Подсчет очков и правильных ответов
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  // Проверка на правильный ответ
  const [checked, setChecked] = useState(false);

  // Функция выбора цвета

  useEffect(() => {
    dispatch(getQuestions(moduleTopics, topic));
    // eslint-disable-next-line
  }, [dispatch, score]);

  const nextQuestion = useCallback(() => {
    setCurrentQuestion(currentQuestion + 1);
    setChecked(false);
  }, [currentQuestion]);

  //  Подсчет очков
  // const handleCorrectAnswer = useCallback(
  //   (event) => {
  //     event.preventDefault();
  //     console.log(event.target.dataset.data);
  //     console.log(`score >>>>> ${score}`);
  //     console.log(`incorect >>>>> ${incorrectAnswers}`);
  //     if (event.target.dataset.check === 'true') {
  //       setScore(score + 1);
  //     }
  //     setIncorrectAnswers(incorrectAnswers + 1);
  //   },
  //   [score, incorrectAnswers]
  // );
  console.log(questionList.length);

  const check = () => {
    setChecked(true);
  };

  // eslint-disable-next-line no-cond-assign
  if (questionList.length === 0) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  console.log(score);

  return (
    <Box className={style.bassicAssesment}>
      <Typography variant="h4">
        Question {currentQuestion + 1} of {questionList.length}
      </Typography>
      <Box mt={3} mb={2}>
        <Typography variant="h6">
          {' '}
          {Parser(`${questionList[currentQuestion].question}`)}{' '}
        </Typography>
      </Box>
      {questionList[currentQuestion].answerList.map((list) => (
        <AnswerButton key={list.id} list={list} checked={checked} />
      ))}
      <Box mt={2}>
        <Box mt={2}>
          <Button mt={2} variant="contained" onClick={check}>
            ЧЕКНУТЬ
          </Button>
        </Box>
        <Box mt={2}>
          <Button mt={2} onClick={nextQuestion} variant="outlined">
            Следующий вопрос
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BasicAssessment;
