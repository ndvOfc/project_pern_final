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
import style from './BasicAssessment.module.css';
import { getQuestions } from '../../redux/thunk/assesmentAsyncAction';
import { getTopics } from '../../redux/thunk/moduleAsyncAction';
import { nextQuestionAC } from '../../redux/actionCreators/assessmentAC';

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
  const { questions, currentQuestionIdx } = useSelector((state) => state.questionsReducer);
  const { topics } = useSelector((state) => state.modulesReducer);

  const [questionIdx, setQuestionIdx] = useState(0);
  const [choiceAnswer, setChoiceAnswer] = useState(false);
  const [answers1, setAnswers1] = useState();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    setAnswers1(questions[0]?.answers.filter((el) => el.JSbasicQuestionId === current));
    console.log(answers1);
    console.log(current);
  }, [questions, current]);

  useEffect(() => {
    dispatch(getTopics(params.moduleTopics));
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    dispatch(getQuestions(moduleTopics, topic));
    // eslint-disable-next-line
  }, [dispatch, currentQuestionIdx]);

  console.log(questions.currentQuestionIdx);
  if (questions.length === 0 || topics.length === 0) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  // console.log(questions[0].questions.length);
  // console.log(`TOPICS >>>>>>>> ${topic}`);

  const handleNextQuestion = () => {
    if (questionIdx + 1 < questions[0].questions.length) {
      setQuestionIdx(questionIdx + 1);
    }
  };

  const handleChoiceAnswer = () => {
    if (choiceAnswer === true) {
      setChoiceAnswer(false);
    } else {
      setChoiceAnswer(true);
    }
  };
  console.log(choiceAnswer);
  return (
    <Box className={style.bassicAssesment}>
      <Typography variant="h4">
        {topics.filter((obj) => obj.paramData === topic)[0].topicTitle}
      </Typography>
      <Typography mt={5}>{Parser(questions[0].questions[questionIdx].question)}</Typography>
      {questions[0].answers
        .filter((el) => Object.entries(el)[3][1] === questions[0].questions[questionIdx].id)
        .map((el) => (
          <Box key={Math.random(Date.now())} mt={2}>
            <Button
              key={Date.now()}
              variant={choiceAnswer ? 'outlined' : 'contained'}
              onClick={handleChoiceAnswer}
            >
              {el.answer}
            </Button>
          </Box>
        ))}
      <Box mt={4}>
        <Button variant="outlined">Ответить</Button>
      </Box>
      <Box mt={2}>
        <Button key={Date.now()} variant="outlined" onClick={handleNextQuestion}>
          Следующий вопрос
        </Button>
      </Box>
    </Box>
  );
}

export default BasicAssessment;
