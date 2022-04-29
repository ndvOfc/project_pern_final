import { Box, Paper } from '@material-ui/core';
import React from 'react';
import { modulesArr } from '../ModuleArrs';
import css from './ModuleItem.module.css';

function ModulleItem() {
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
        <Paper className={css.paper} key={module.id} moduleName={module.module}>
          <img src={module.img} alt="some" />
        </Paper>
      ))}
    </Box>
  );
}

export default ModulleItem;
