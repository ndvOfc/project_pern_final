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
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import style from './BasicAssessment.module.css';
import { getQuestions } from '../../redux/thunk/assesmentAsyncAction';
import { getTopics } from '../../redux/thunk/moduleAsyncAction';
import AnswerButton from '../UI/AnswerButton/AnswerButton';
import EndTestCard from '../UI/EndTestCard/EndTestCard';
import AnswerModal from '../UI/AnswerModal/AnswerModal';

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

  // для фикса стилей линка. Ден - если все норм, удали коммент
  const navigate = useNavigate();
  // Подсчет очков и правильных ответов
  const [score, setScore] = useState(0);

  // Для модалки
  const [open, setOpen] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    setCorrectAnswer('');
  }, [currentQuestion]);

  // Подсчет очков
  const handleCorrectAnswer = useCallback(
    (event) => {
      event.preventDefault();
      if (event.target.dataset.answ === 'true') {
        setScore(score + 1);
      }
    },
    [score]
  );
  console.log(questionList.length);
  console.log(`STATE CORRECT ANSWER>>>>>>>>> ${correctAnswer}`);
  const check = () => {
    setChecked(true);
    // eslint-disable-next-line no-use-before-define
    setCorrectAnswer(answerToModal[0].answer);
  };
  const questionsLength = questionList.length;
  // eslint-disable-next-line no-cond-assign
  if (questionList.length === 0) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  console.log(`Current>>>> ${currentQuestion}`);
  console.log(`Question Length >>>>>> ${questionList.length}`);
  if (currentQuestion === questionList.length) {
    return (
      <Box>
        <EndTestCard questionLength={questionsLength} score={score} />
      </Box>
    );
  }

  const answerToModal = questionList[currentQuestion].answerList.filter(
    (answer) => answer.isCorrect
  );

  return (
    <Box className={style.bassicAssesment}>
      {/* мой вариант */}
      <Button variant="contained" sx={{ margin: 1 }} onClick={() => navigate(-1)}>
        {/* дена вариант */}
        {/* <Link to="/modules">Назад</Link> */}
        Назад
      </Button>
      <Paper
        elevation={3}
        sx={{
          background: '#FAE392FF',
          padding: 3,
          mb: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Дена */}
        {/* <Button onClick={handleOpen}>Не шарю узнать правильный ответ</Button> */}
        {/* мое */}
        <Button variant="contained" color="dark" sx={{ marginBottom: 2 }} onClick={handleOpen}>
          правильный ответ <QuestionAnswerIcon />
        </Button>
        <Typography variant="h4">
          Question {currentQuestion + 1} of {questionList.length}
        </Typography>
        <Box mt={3} mb={2}>
          <Typography variant="h6">
            {' '}
            {Parser(`${questionList[currentQuestion].question}`)}{' '}
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ padding: 4 }}>
        {questionList[currentQuestion].answerList.map((list) => (
          <AnswerButton
            handleCorrectAnswer={handleCorrectAnswer}
            key={list.id}
            list={list}
            checked={checked}
          />
        ))}
      </Paper>
      <Box mt={2}>
        {!checked ? (
          <Box mt={2}>
            <Button mt={2} size="large" variant="contained" onClick={check}>
              Ответить
            </Button>
          </Box>
        ) : (
          <Box />
        )}

        {checked ? (
          <Box mt={2}>
            <Button mt={2} score={score} size="large" onClick={nextQuestion} variant="contained">
              Следующий вопрос
            </Button>
          </Box>
        ) : (
          <Box />
        )}
      </Box>
      <AnswerModal correctAnswer={correctAnswer} open={open} handleClose={handleClose} />
    </Box>
  );
}

export default BasicAssessment;
