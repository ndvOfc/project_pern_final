// eslint-disable-next-line import/no-import-module-exports
// eslint-disable-next-line import/no-import-module-exports
import { useNavigate } from 'react-router-dom';
// import { modulesArr } from '../ModuleArrs';
// eslint-disable-next-line import/no-import-module-exports
import { CardMedia, Paper } from '@mui/material';
// eslint-disable-next-line import/no-import-module-exports
import React from 'react';
// eslint-disable-next-line import/no-import-module-exports
import css from './ModuleItem.module.css';
// import TopicsItem from '../TopicsItem/TopicsItem';

// eslint-disable-next-line react/prop-types
function ModulleItem({ titleModules, img }) {
  // console.log(titleModules);
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => navigate(`/modules/${titleModules}`)}
      className={css.paper}
      key={module.id}
      modulename={titleModules}
    >
      <CardMedia
        className={css.Img}
        src={img}
        alt="name"
        title="name"
        // sx={{ height: '120px', width: 'auto' }} //ЧТО ДЕЛАТЬ С РАЗМЕРАМИ ? как зафиксировать низ?
        component="img"
      />
    </Paper>
  );
}

export default ModulleItem;
