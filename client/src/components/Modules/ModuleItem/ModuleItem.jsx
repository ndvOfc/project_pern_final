import { Box, Paper } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { modulesArr } from '../ModuleArrs';
import css from './ModuleItem.module.css';
// import TopicsItem from '../TopicsItem/TopicsItem';

function ModulleItem() {
  const navigate = useNavigate();
  return (
    <Box
      // className={css.Box}
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
        <Paper
          onClick={() => navigate(`/modules/${module.module}`)}
          className={css.paper}
          key={module.id}
          modulename={module.module}
        >
          <img src={module.img} alt="some" />
        </Paper>
      ))}
    </Box>
  );
}

export default ModulleItem;
