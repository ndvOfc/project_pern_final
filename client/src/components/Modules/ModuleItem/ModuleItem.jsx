// eslint-disable-next-line import/no-import-module-exports
import { useNavigate } from 'react-router-dom';
// import { modulesArr } from '../ModuleArrs';
// eslint-disable-next-line import/no-import-module-exports
import { Box, CardMedia } from '@mui/material';
// eslint-disable-next-line import/no-import-module-exports
import React from 'react';
// eslint-disable-next-line import/no-import-module-exports
import css from './ModuleItem.module.css';
// import TopicsItem from '../TopicsItem/TopicsItem';

// eslint-disable-next-line react/prop-types
function ModulleItem({ titleModules, img }) {
  console.log(img);
  // console.log(titleModules);
  const navigate = useNavigate();
  return (
    <Box
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0%)' }}
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
        sx={{ objectFit: 'fill' }} // ЧТО ДЕЛАТЬ С РАЗМЕРАМИ ? как зафиксировать низ?
        component="img"
      />
    </Box>
  );
}

export default ModulleItem;
