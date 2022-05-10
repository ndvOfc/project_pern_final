/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CardAchivment({ el }) {
  // console.log(el);
  return (
    <Box
      sx={{
        padding: '30px 20px',
        width: '50px',
        height: '50px',
        margin: '20px 20px',
        border: 'dashed red',
      }}
    >
      <CardMedia src={el.image} alt={el.name} title="Achivment" component="img" />
      <Typography sx={{ fontSize: 10 }}>Прогресс: {el.progress()}</Typography>
    </Box>
  );
}

export default CardAchivment;
