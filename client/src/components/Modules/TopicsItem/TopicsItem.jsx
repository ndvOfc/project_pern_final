import { Box, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import css from './TopicsItem.module.css';
import { getTopics } from '../../../redux/thunk/moduleAsyncAction';
import Loader from '../../UI/Loader/Loader';

// eslint-disable-next-line react/prop-types
function TopicsItem() {
  const params = useParams();
  const dispatch = useDispatch();

  const { topics } = useSelector((state) => state.modulesReducer);

  useEffect(() => {
    dispatch(getTopics(params.moduleTopics));
  }, [dispatch]);

  const style = {
    width: '40rem',
    height: '2rem',
  };
  return (
    <Box sx={{ margin: '0 auto' }}>
      {!topics.length ? (
        <Loader />
      ) : (
        topics.map((elem) => (
          <Paper
            // onClick={()=> navigate('')}
            className={css.topicItem}
            style={style}
            key={elem.topicTitle}
            // topicname={elem.topicId}
          >
            <Typography>{elem.topicTitle}</Typography>
            <Typography>Прогресс: 0/10</Typography>
          </Paper>
        ))
      )}
    </Box>
  );
}

export default TopicsItem;
