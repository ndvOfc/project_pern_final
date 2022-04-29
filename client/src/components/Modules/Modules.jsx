import { Box, Paper } from '@material-ui/core';
import React from 'react';
import css from './Modules.module.css';

function Modules() {
  const modulesArr = [
    {
      id: 2,
      img: 'https://itproger.com/img/news/1580823783.jpg',
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--e_rqeB7o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1*FPtQLT2Zk-baHficCz_mXQ.png',
    },
    {
      id: 3,
      img: 'https://www.internet-technologies.ru/wp-content/uploads/2020/10/54696-850648.png',
    },
  ];

  const questionsAndAnswers = [
    {
      id: 1,
      question: 'some awesome question 1',
      answers: [
        { answer: 'some1', isRight: false },
        { answer: 'some1', isRight: false },
        { answer: 'some1', isRight: false },
        { answer: 'some1', isRight: true },
      ],
    },
  ];
  return (
    <Box
      sx={{
        margin: '15px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 120,
        },
      }}
    >
      {modulesArr.map((module) => (
        <Paper className={css.paper} key={module.id}>
          <img src={module.img} alt="some" />
        </Paper>
      ))}
    </Box>
  );
}

export default Modules;
