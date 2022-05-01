import { Box, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { JSmoduleTopics } from '../ModuleArrs';
import css from './TopicsItem.module.css';

function TopicsItem() {
  const params = useParams();
  const [topicItems, setTopicItems] = useState([]);
  // console.log(params);

  const getTopicsItemList = () => {
    setTopicItems(JSmoduleTopics);
  };

  useEffect(() => {
    getTopicsItemList(params.topic);
    // console.log(topicItems);
  }, []);
  // const navigate = useNavigate();

  const style = {
    width: '40rem',
    height: '2rem',
  };
  return (
    <Box sx={{ margin: '0 auto' }}>
      {topicItems.map((topic) => (
        <Paper
          // onClick={()=> navigate('')}
          className={css.topicItem}
          style={style}
          key={topic.id}
          topicname={topic.topic}
        >
          <Typography>{topic.topic}</Typography>
          <Typography>Прогресс: 0/10</Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default TopicsItem;
