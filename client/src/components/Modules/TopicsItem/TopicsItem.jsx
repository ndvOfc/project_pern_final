import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { moduleTopics } from '../ModuleArrs';
import css from './TopicsItem.module.css';

function TopicsItem() {
  const style = {
    width: '40rem',
    height: '2rem',
  };
  return (
    <Box sx={{ margin: '0 auto' }}>
      {moduleTopics.map((topic) => (
        <Paper className={css.topicItem} style={style} key={topic.id} topicName={topic.topic}>
          <Typography>{topic.topic}</Typography>
          <Typography>Прогресс: 0/10</Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default TopicsItem;
