/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
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
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    dispatch(getQuestions(moduleTopics, topic));
    // eslint-disable-next-line
  }, [dispatch]);

  const nextQuestion = useCallback(() => {
    setCurrentQuestion(currentQuestion + 1);
  }, [currentQuestion]);

  const selectOption = (e) => {
    e.preventDefault();
    console.log(e.target);
    e.target.style.backgroundColor = 'tomato';
  };

  const handleCorrectAnswer = useCallback(
    (event) => {
      event.preventDefault();
      console.log(event.target.dataset.data);
      console.log(`score >>>>> ${score}`);
      console.log(`incorect >>>>> ${incorrectAnswers}`);
      if (event.target.dataset.check === 'true') {
        setScore(score + 1);
        setSelected(true);
      }
      setIncorrectAnswers(incorrectAnswers + 1);
    },
    [score, incorrectAnswers]
  );
  console.log(questionList.length);

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
        <Box key={v4()} mt={2}>
          <Button
            variant="outlined"
            className={style.btn}
            size="large"
            onClick={(e) => {
              handleCorrectAnswer(e);
              selectOption(e);
            }}
            data-check={list.isCorrect.toString()}
            key={v4()}
            mt={2}
          >
            {list.answer}
          </Button>
        </Box>
      ))}
      <Box mt={2}>
        <Button mt={2} variant="outlined">
          Ответить
        </Button>
        <Box mt={2}>
          <Button onClick={nextQuestion} mt={2} variant="outlined">
            Следующий вопрос
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BasicAssessment;
