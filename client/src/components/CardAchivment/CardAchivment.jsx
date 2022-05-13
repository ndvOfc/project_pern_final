/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CardAchivment({ el }) {
  // console.log(el);
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        width: '7rem',
        margin: '1vw',
      }}
    >
      <CardMedia
        src={el.img}
        alt={el.titleModules}
        title={el.titleModules}
        component="img"
        sx={{ width: '100%', borderRadius: '13px' }}
      />
      {/* <Typography sx={{ fontSize: '1em' }}>Прогресс: {el.progress()}</Typography>  подтянуть прогресс */}
    </Box>
  );
}

export default CardAchivment;
