/* eslint-disable no-unused-vars */
// noinspection ES6CheckImport

import { Box, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import css from './TopicsItem.module.css';
import { getTopics } from '../../../redux/thunk/moduleAsyncAction';
import Loader from '../../UI/Loader/Loader';

// eslint-disable-next-line react/prop-types
function TopicsItem() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { moduleTopics } = params;
  const { topics } = useSelector((state) => state.modulesReducer);

  useEffect(() => {
    dispatch(getTopics(params.moduleTopics));
  }, [dispatch, params]);

  return (
    <Box sx={{ margin: '0 auto' }}>
      {!topics.length ? (
        <Loader />
      ) : (
        topics.map((elem) => (
          <Paper
            onClick={() => navigate(`/modules/${moduleTopics}/${elem.paramData}`)}
            className={css.topicItem}
            // style={style}
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
